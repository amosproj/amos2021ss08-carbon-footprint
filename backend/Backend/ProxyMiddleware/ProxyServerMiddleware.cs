using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Backend.ProxyMiddleware
{
    public class ProxyServerMiddleware
    {
        private readonly RequestDelegate _next;

        public ProxyServerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var endRequest = false;
            if (context.Request.Path.Value.Equals("/proxy", StringComparison.OrdinalIgnoreCase))
            {
                const string key = "url";
                if (context.Request.Query.ContainsKey(key))
                {
                    var url = context.Request.Query[key][0];
                    await ProjectReqAsync(context, url);
                    endRequest = true;
                }
            }
            if (!endRequest)
            {
                await _next(context);
            }
        }

        private static async Task ProjectReqAsync(HttpContext context, string url)
        {
            var httpClientHandler = new HttpClientHandler {
                AllowAutoRedirect = false
            };
            var webRequest = new HttpClient(httpClientHandler);
            var localResponse = context.Response;
            try
            {
                using (var remoteStream = await webRequest.GetAsync(url))
                {
                    localResponse.Clear();
                    localResponse.ContentType = "api/Projects";
                    localResponse.Headers.Add();
            }
            catch (Exception e)
            {
                // Do some logging here
            }
        }
    }
}
