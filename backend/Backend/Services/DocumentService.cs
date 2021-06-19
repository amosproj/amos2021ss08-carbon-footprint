using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Drawing;
using System.IO;
using System.ComponentModel;
using Backend.Helper;
using Microsoft.AspNetCore.Http;

namespace Backend.Services
{
    public class DocumentService
    {
        public string createReport()
        {
            var unzipPath = @"Templates\template-docx.docx".UnzipDOCX();
            var imagePath = unzipPath + @"\word\media\";

            Image image = Image.FromFile(@"Templates\jpegsample.jpg");

            File.Delete(imagePath + "image7.png");
            File.Delete(imagePath + "image11.png");
            File.Delete(imagePath + "image14.png");

            image.Save(imagePath + "image" + "7.png", System.Drawing.Imaging.ImageFormat.Png);
            image.Save(imagePath + "image" + "11.png", System.Drawing.Imaging.ImageFormat.Png);
            image.Save(imagePath + "image" + "14.png", System.Drawing.Imaging.ImageFormat.Png);

            unzipPath.ZipDOCX(@"Templates\template-modified.docx");
            return @"Templates\template-modified.docx";
        }

        public static List<Image> GetFileModelsFromRequest(HttpRequest request)
        {
            List<Image> list = new List<Image>();

            foreach (var formField in request.Form)
            {
                // Form data 
                var fileModelText = formField.Value.ToString().Replace("data:image/jpeg;base64,","");

                //... process and add to the FileModel list
                byte[] bytes = Convert.FromBase64String(fileModelText);

                Image image;
                using (MemoryStream ms = new MemoryStream(bytes))
                {
                    image = Image.FromStream(ms);
                    image.Save(@"Templates\" + "image" + "7.png", System.Drawing.Imaging.ImageFormat.Png);
                }
                list.Add(image);
            }

            //if (request.Form.Files != null && request.Form.Files.Count > 0)
            //{
            //    foreach (var file in request.Form.Files)
            //    {
            //        using (MemoryStream ms = new MemoryStream())
            //        {
            //            // File data
            //            //formFile.CopyTo(ms);
            //        }

            //        // ... process and add to the FileModel list
            //    }
            //}

            return list;
        }

        //XDocument template = XDocument.Load(@"Templates\template-xml.xml");
        //string document = template.ToString();

        //var documentModified = ReplaceXmlInlineImageDate(document, @"Templates\jpegsample.jpg", "7");
        //documentModified = ReplaceXmlInlineImageDate(documentModified, @"Templates\jpegsample.jpg", "11");
        //documentModified = ReplaceXmlInlineImageDate(documentModified, @"Templates\jpegsample.jpg", "14");

        //XDocument xDocument = XDocument.Parse(documentModified, LoadOptions.PreserveWhitespace);
        //xDocument.Save(@"Templates\template-xml-edited.docx");

        //private static string ReplaceXmlInlineImageDate(string document, string imagePath, string imageToBeReplacedNumber)
        //{
        //    //load image from filesystem
        //    Image image = Image.FromFile(imagePath);
        //    Bitmap bitmap = new Bitmap(image);
        //    TypeConverter converter = TypeDescriptor.GetConverter(typeof(Bitmap));
        //    string imgContent = Convert.ToBase64String((byte[])converter.ConvertTo(bitmap, typeof(byte[])));

        //    //build document string
        //    string delimiterOpeningTag = "<pkg:part pkg:name=\"/word/media/image"+imageToBeReplacedNumber+".png\" pkg:contentType=\"image/png\" pkg:compression=\"store\">\r\n    <pkg:binaryData>";
        //    string delimiterClosingTag = "</pkg:binaryData>\r\n  </pkg:part>\r\n";
        //    var documentArray = document.Split(delimiterOpeningTag);
        //    var documentArray2 = documentArray[1].Split(delimiterClosingTag);
        //    var restString = String.Join(delimiterClosingTag, documentArray2, 1, documentArray2.Length - 1);
        //    var documentModified = documentArray[0] + delimiterOpeningTag + imgContent + delimiterClosingTag + restString;
        //    return documentModified;
        //}
    }
}
