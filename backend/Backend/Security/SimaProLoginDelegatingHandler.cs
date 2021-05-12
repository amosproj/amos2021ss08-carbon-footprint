using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Backend.Security
{
    public class SimaProLoginDelegatingHandler : DelegatingHandler
    {
        private const string _loginPath = "token";
        private readonly string baseUrl;
        private readonly string simaProUser;
        private readonly string simaProPassword;

        private string accessToken = "";

        public SimaProLoginDelegatingHandler(IConfiguration configuration)
        {
            baseUrl = Environment.GetEnvironmentVariable("BaseUrl") ?? configuration["BaseUrl"];
            simaProUser = Environment.GetEnvironmentVariable("User") ?? configuration["User"];
            simaProPassword = Environment.GetEnvironmentVariable("Password") ?? configuration["Password"];
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
       CancellationToken cancellationToken)
        {
            if (accessToken != "")
            {
                //use token if we already have one
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                var requestResponse = await base.SendAsync(request, cancellationToken);

                if (requestResponse.IsSuccessStatusCode)
                {
                    return requestResponse;
                } else if (requestResponse.StatusCode!= HttpStatusCode.Unauthorized)
                {
                    return requestResponse;
                }
            }

            //if we dont have an accesstoken yet or the request returned Unauthorized,
            //we get a new token via login request,
            //add it to the original request, send original request
            var loginPath = baseUrl + _loginPath;
            var loginRequest = new HttpRequestMessage(new HttpMethod("POST"), loginPath) {
                Content = new StringContent(JsonConvert.SerializeObject(
                    new {
                        email = simaProUser,
                        password = simaProPassword
                    }), Encoding.UTF8, "application/json")
            };
            var loginResponse = await base.SendAsync(loginRequest, cancellationToken);

            if (loginResponse.IsSuccessStatusCode)
            {

                var loginResponseContent = JObject.Parse(await loginResponse.Content.ReadAsStringAsync());
                accessToken = loginResponseContent["Result"]["AccessToken"]["Token"].ToString();
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

                // Login successful -> Send original request
                return await base.SendAsync(request, cancellationToken);
            }
            return new HttpResponseMessage();
        }
    }
}
