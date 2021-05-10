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

        public async Task TestAsync()
        {
            //var body = new StringContent(JsonConvert.SerializeObject(new ParentAccountIdModel { parentAccountId = resellerAccountId }));
            var response = await _httpClient.GetAsync("GetCompanies");
        }
    }


}
