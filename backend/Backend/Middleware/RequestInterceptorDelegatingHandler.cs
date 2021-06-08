using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.IO.Compression;
using System.IO;
using System.Text;

namespace Backend.Middleware
{
    public class RequestInterceptorDelegatingHandler : DelegatingHandler
    {
        private readonly string baseUrl;

        public RequestInterceptorDelegatingHandler(IConfiguration configuration)
        {
            baseUrl = Environment.GetEnvironmentVariable("BaseUrl") ?? configuration["BaseUrl"];
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
      CancellationToken cancellationToken)
        {
            if (request.RequestUri.ToString().Contains("api/calculation"))
            {
                var requestResponse = await base.SendAsync(request, cancellationToken);
                var contentString = await requestResponse.Content.ReadAsStringAsync();

                var responseContent = JObject.Parse(contentString);
                var calculationId = responseContent["Result"]["CalculationId"].ToString();


                var calculationStateRequest = new HttpRequestMessage(new HttpMethod("GET"), baseUrl + "calculation/state/" + calculationId) { };
                HttpResponseMessage calculationStateResponse;

                Thread.Sleep(500);

                while (true)
                {
                    calculationStateResponse = await base.SendAsync(calculationStateRequest, cancellationToken);

                    var calculationResponseContent = JObject.Parse(await calculationStateResponse.Content.ReadAsStringAsync());
                    var calculationResultStatus = calculationResponseContent["Result"].ToString();

                    if (calculationResultStatus == "Stored")
                    {
                        break;
                    }
                    Thread.Sleep(500);
                }

                var calculationResultRequest = new HttpRequestMessage(new HttpMethod("POST"), baseUrl + "calculation/result/" + calculationId) {
                    Content = new StringContent(JsonConvert.SerializeObject(""), Encoding.UTF8, "application/json")
                };
                HttpResponseMessage calculationResultResponse = await base.SendAsync(calculationResultRequest, cancellationToken);
                return calculationResultResponse;
            }

            return await base.SendAsync(request, cancellationToken);

        }
    }
}
