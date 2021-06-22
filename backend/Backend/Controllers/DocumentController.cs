using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Web;
namespace Backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly DocumentService _documentService;

        public DocumentController(DocumentService documentService)
        {
            _documentService = documentService;
        }

        //[HttpPost("test")]
        //public IActionResult test()
        //{
        //    var files = DocumentService.GetFileModelsFromRequest(this.Request);

        //    return new OkResult();
        //}

        [HttpPost("CreateReport")]
        public FileContentResult CreateReport()
        {
            string filepath = _documentService.createReport(this.Request);

            string filename = "Report.docx";
            byte[] filedata = System.IO.File.ReadAllBytes(filepath);
            string contentType;
            new FileExtensionContentTypeProvider().TryGetContentType(filepath, out contentType);

            var cd = new System.Net.Mime.ContentDisposition {
                FileName = filename,
                Inline = false
            };

            Response.Headers.Add("Content-Disposition", cd.ToString());
            Response.Headers.Add("Access-Control-Expose-Headers", "*");
            return File(filedata, contentType);
        }

        [HttpOptions("CreateReport")]
        public IActionResult PreflightRoute()
        {
            return NoContent();
        }

    }
}
