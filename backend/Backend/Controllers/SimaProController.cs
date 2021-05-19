using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Net.Http;
using Microsoft.Extensions.Primitives;
using AspNetCore.Proxy;
using AspNetCore.Proxy.Options;

namespace Backend.Controllers
{
    [Route("[controller]/api")]
    [ApiController]
    public class SimaProController : ControllerBase
    {
        //Use the SimaPro client that has been registered at startup.
        //using the login from the SimaProLoginDelegatingHandler in Starup.cs
        private HttpProxyOptions httpProxyOptions = HttpProxyOptionsBuilder.Instance
            .WithHttpClientName("SimaProClient")
            .Build();

        public SimaProController()
        {
        }
        /* Http proxy request controller. 
            to process all the http requests using one connection.
            Takes every request in the route so that we can avoid additional endpoints.
         */
        [Route("{**rest}")]
        public Task ProxyCatchAll(string rest)
        {
            var queryString = this.Request.QueryString.Value;
            return this.HttpProxyAsync($"{rest}{queryString}", httpProxyOptions);
        }

    }
}
