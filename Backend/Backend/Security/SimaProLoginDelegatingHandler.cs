using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Net.Http;
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
            simaProUser = Environment.GetEnvironmentVariable("Username") ?? configuration["Username"];
            simaProPassword = Environment.GetEnvironmentVariable("Password") ?? configuration["Password"];
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
       CancellationToken cancellationToken)
        {
            request.Headers.Add("Authenticate", accessToken);

            var loginPath = baseUrl + _loginPath;
            var loginRequest = new HttpRequestMessage(new HttpMethod("POST"), loginPath) {
                Content = new StringContent(JsonConvert.SerializeObject(
                    new {
                        email = simaProUser,
                        password = simaProPassword
                    }), Encoding.UTF8, "application/json")
            };
            //loginRequest.Headers.Clear();

            var loginResponse = await base.SendAsync(loginRequest, cancellationToken);

            return loginResponse;
        }
    }
}
