using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace Backend.Services
{

    public class SimaProQueryService
    {
        private readonly HttpClient _httpClient;
        public SimaProQueryService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<HttpResponseMessage> TestAsync()
        {
            return await _httpClient.GetAsync("projects");
        }
    }


}
