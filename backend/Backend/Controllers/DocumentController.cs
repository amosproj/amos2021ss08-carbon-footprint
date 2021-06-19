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

        [HttpPost("test")]
        public IActionResult test()
        {
            var files = DocumentService.GetFileModelsFromRequest(this.Request);

            return new OkResult();
        }

        [HttpPost("CreateReport")]
        public FileContentResult CreateReport()
        {
            string filepath = _documentService.createReport();
            string filename = "template-modified.docx";
            byte[] filedata = System.IO.File.ReadAllBytes(filepath);
            string contentType;
            new FileExtensionContentTypeProvider().TryGetContentType(filepath, out contentType);

            var cd = new System.Net.Mime.ContentDisposition {
                FileName = filename,
                Inline = true,
            };

            Response.Headers.Add("Content-Disposition", cd.ToString());

            return File(filedata, contentType);
        }
        
    }
}
