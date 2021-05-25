using Castle.Core.Configuration;
using IdentityModel.Client;
using IdentityServer4;
//using IdentityServerHost;
using MiNET.Utils;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace SecureAPITests
{
    public class TestApiEndpoints
    {
        private readonly string baseUrl;
        private readonly string simaProUser;
        private readonly string simaProPassword;
        private readonly object client;
        private string accessToken = "";

        public TestApiEndpoints()
        {
            baseUrl = Environment.GetEnvironmentVariable("BaseUrl");
            simaProUser = Environment.GetEnvironmentVariable("User");
            simaProPassword = Environment.GetEnvironmentVariable("Password");

        }
        /*private async Task<string> GetAccessToken()
         {
            var loginRequest = new HttpRequestMessage(new HttpMethod("POST"), baseUrl)
            {
                Content = new StringContent(JsonConvert.SerializeObject(
                    new
                    {
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
        return accessT
    }

         [Fact]
         public async Task GetAccessTokenWithCreds()
         {
             string token = await GetAccessToken();

             Assert.False(string.IsNullOrWhiteSpace(token));
         }
    
         [Fact]
         public async Task HitApiEndpoint()
         {
             string token = await GetAccessToken();

             var apiClient = new HttpClient();
             apiClient.SetBearerToken(token);

             var apiResponse = await apiClient.GetAsync($"{ApiBaseUrl}/test");

             Assert.True(apiResponse.IsSuccessStatusCode);

             var stringResponse = await apiResponse.Content.ReadAsStringAsync();

             dynamic result = JsonConvert.DeserializeAnonymousType(stringResponse, new { message = "" });
             Assert.Equal("Hello API", result.message);
         }
        
    }*/
    }
}