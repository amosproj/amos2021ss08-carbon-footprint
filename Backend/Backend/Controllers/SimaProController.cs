using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Backend.Services;

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
            await _simaProQueryService.TestAsync();
            return new OkObjectResult("this ok");  
        }
    }
}
