using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Concurrent;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Backend.Middleware
{
    // Catch the http post request(postCalculationRequest) from front-end.
    // Further process the request and send back the Results to fornt-end.
    public class RequestInterceptorDelegatingHandler : DelegatingHandler
    {
        private readonly string baseUrl;
        private readonly ConcurrentDictionary<string, (HttpResponseMessage, string)> calculationResultDictionary;

        public RequestInterceptorDelegatingHandler(IConfiguration configuration)
        {
            baseUrl = Environment.GetEnvironmentVariable("BaseUrl") ?? configuration["BaseUrl"];
            calculationResultDictionary = new ConcurrentDictionary<string, (HttpResponseMessage httpResponse, string content)>();
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
      CancellationToken cancellationToken)
        {
            if (request.RequestUri.ToString().Contains("api/calculation"))
            {
                var projectId = request.RequestUri.ToString().Split("/")[5];

                //checking whether the calculcation has been done before
                (HttpResponseMessage httpResp, string content) outvalue;
                if (calculationResultDictionary.TryGetValue(projectId, out outvalue))
                {
                    //manually setting the responseContent Json
                    var jobject = JObject.Parse(outvalue.content);
                    outvalue.httpResp.Content = new StringContent(JsonConvert.SerializeObject(jobject), Encoding.UTF8, "application/json");

                    //return the stored result
                    return outvalue.httpResp;
                }

                var requestResponse = await base.SendAsync(request, cancellationToken);
                if (!requestResponse.IsSuccessStatusCode)
                {
                    return requestResponse;
                }
                var contentString = await requestResponse.Content.ReadAsStringAsync();
                //Retrieve the CalculationId from the post request
                var responseContent = JObject.Parse(contentString);
                var calculationId = responseContent["Result"]["CalculationId"].ToString();

                // Get the status of the calculation based on the CalculationId earlier created.
                var calculationStateRequest = new HttpRequestMessage(new HttpMethod("GET"), baseUrl + "calculation/state/" + calculationId) { };
                HttpResponseMessage calculationStateResponse;

                Thread.Sleep(500);
                //Checks of the calculation is completed.
                //Results: Calulating,Storing,Stored,Not Stored, Not Found
                while (true)
                {
                    calculationStateResponse = await base.SendAsync(calculationStateRequest, cancellationToken);
                    if (!calculationStateResponse.IsSuccessStatusCode)
                    {
                        return calculationStateResponse;
                    }
                    var calculationResponseContent = JObject.Parse(await calculationStateResponse.Content.ReadAsStringAsync());
                    var calculationResultStatus = calculationResponseContent["Result"].ToString();

                    if (calculationResultStatus == "Stored")
                    {
                        break;
                    }
                    Thread.Sleep(500);
                }
                //If the calculation is stored.Send a post post request to retrieve the results and send back to the front-end.
                var calculationResultRequest = new HttpRequestMessage(new HttpMethod("POST"), baseUrl + "calculation/result/" + calculationId) {
                    Content = new StringContent(JsonConvert.SerializeObject(""), Encoding.UTF8, "application/json")
                };
                HttpResponseMessage calculationResultResponse = await base.SendAsync(calculationResultRequest, cancellationToken);

                //storing the calculation result, content has to be read and stored manually or it will be lost since it is a stream
                calculationResultDictionary.TryAdd(projectId, (calculationResultResponse, await calculationResultResponse.Content.ReadAsStringAsync()));
                return calculationResultResponse;
            }

            return await base.SendAsync(request, cancellationToken);

        }
    }
}
