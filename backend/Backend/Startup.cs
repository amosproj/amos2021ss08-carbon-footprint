using AspNetCore.Proxy;
using Backend.Security;
using Backend.Middleware;
using Backend.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;

namespace Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder => {
                                      builder.WithOrigins(
                                          "http://localhost:3000",
                                          "http://127.0.0.1:3000",
                                          "https://localhost:3000",
                                          "https://127.0.0.1:3000").AllowAnyHeader();

                                  });
            });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Backend", Version = "v1" });
            });

            services.AddProxies();

            services.AddTransient<DocumentService>();

            //Used to  get the authenticate/process the Http requests.
            services.AddTransient<SimaProLoginDelegatingHandler>();

            //Used to intercept and process frontend requests.
            services.AddTransient<RequestInterceptorDelegatingHandler>();
            //Decompress the gZip results recieved from the api
            HttpClientHandler handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate };

            services.AddHttpClient("SimaProClient",
                 client => {
                     var baseUrl = Environment.GetEnvironmentVariable("BaseUrl") ?? Configuration["BaseUrl"];
                     client.BaseAddress = new Uri(baseUrl);
                     //client.Timeout = TimeSpan.FromSeconds(30);
                 })
                .ConfigurePrimaryHttpMessageHandler(() => {
                    return handler;
                })
                .AddHttpMessageHandler<RequestInterceptorDelegatingHandler>()
                .AddHttpMessageHandler<SimaProLoginDelegatingHandler>();
                
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //app.UseSwagger();
                //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Backend v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers()
                            .RequireCors(MyAllowSpecificOrigins);
            });
        }

    }
}
