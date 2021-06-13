using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        [HttpPost("test")]
        public IActionResult test()
        {
            return new OkResult();
        }
    }
}
