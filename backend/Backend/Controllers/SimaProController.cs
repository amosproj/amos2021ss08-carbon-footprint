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
        private HttpProxyOptions httpProxyOptions = HttpProxyOptionsBuilder.Instance
            .WithHttpClientName("SimaProClient")
            .Build();

        public SimaProController()
        {
        }

        [Route("{**rest}")]
        public Task ProxyCatchAll(string rest)
        {
            // If you don't need the query string, then you can remove this.
            var queryString = this.Request.QueryString.Value;
            return this.HttpProxyAsync($"{rest}{queryString}", httpProxyOptions);
        }

    }
}
