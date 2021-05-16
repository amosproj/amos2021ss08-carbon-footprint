using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Backend.Services;
using System.Net.Http;
using Microsoft.Extensions.Primitives;

namespace Backend.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    public class SimaProController : ControllerBase
    {
        SimaProQueryService _simaProQueryService;

        public SimaProController(SimaProQueryService simaProQueryService)
        {
            _simaProQueryService = simaProQueryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetTest()
        {
            var response = await _simaProQueryService.TestAsync();
            this.HttpContext.Response.RegisterForDispose(response);
            return new HttpResponseMessageResult(response);
        }

        //copy paste from stackoverflow to build the new response from the response the backend got from the api
        public class HttpResponseMessageResult : IActionResult
        {
            private readonly HttpResponseMessage _responseMessage;

            public HttpResponseMessageResult(HttpResponseMessage responseMessage)
            {
                _responseMessage = responseMessage; // could add throw if null
            }

            public async Task ExecuteResultAsync(ActionContext context)
            {
                context.HttpContext.Response.StatusCode = (int)_responseMessage.StatusCode;

                foreach (var header in _responseMessage.Headers)
                {
                    context.HttpContext.Response.Headers.TryAdd(header.Key, new StringValues(header.Value.ToArray()));
                }

                using (var stream = await _responseMessage.Content.ReadAsStreamAsync())
                {
                    await stream.CopyToAsync(context.HttpContext.Response.Body);
                    await context.HttpContext.Response.Body.FlushAsync();
                }
            }
        }
    }
}
