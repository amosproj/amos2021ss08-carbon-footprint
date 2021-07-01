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
        public string createReport(HttpRequest request)
        {
            var imageNumbers = new List<int>() { 7, 14, 11 };

            GetFileModelsFromRequest(request, imageNumbers);

            var unzipPath = @"Templates\template-docx.docx".UnzipDOCX();
            var docxImagePath = unzipPath + @"\word\media\";


            foreach (var number in imageNumbers)
            {
                File.Delete(docxImagePath + "image" + number.ToString() + ".png");
                var image = Image.FromFile(@"Templates\image" + number.ToString() + ".png");
                image.Save(docxImagePath + "image" + number.ToString() + ".png", System.Drawing.Imaging.ImageFormat.Png);
                image.Dispose();
                File.Delete(@"Templates\image" + number.ToString() + ".png");
            }

            unzipPath.ZipDOCX(@"Templates\template-modified.docx");
            Directory.Delete(@"Templates\template-docx",true);
            return @"Templates\template-modified.docx";

            //List<Image> images = new List<Image>() {
            //    Image.FromFile(@"Templates\image7.png"),
            //    Image.FromFile(@"Templates\image11.png"),
            //    Image.FromFile(@"Templates\image14.png")
            //};
            
            //File.Delete(imagePath + "image7.png");
            //File.Delete(imagePath + "image11.png");
            //File.Delete(imagePath + "image14.png");

            //images[0].Save(imagePath + "image" + "7.png", System.Drawing.Imaging.ImageFormat.Png);
            //images[1].Save(imagePath + "image" + "11.png", System.Drawing.Imaging.ImageFormat.Png);
            //images[2].Save(imagePath + "image" + "14.png", System.Drawing.Imaging.ImageFormat.Png);


            //File.Delete(@"Templates\image7.png");
            //File.Delete(@"Templates\image11.png");
            //File.Delete(@"Templates\image14.png");




        }

        public static void GetFileModelsFromRequest(HttpRequest request, List<int> imageNumbers)
        {
            foreach (var formField in request.Form)
            {
                // Form data 
                var stringValues = formField.Value.Select(x => x.ToString()).Select(y => y.Replace("data:image/jpeg;base64,",""));
                var stringValueTuples = stringValues.Zip(imageNumbers);

                foreach (var tuple in stringValueTuples)
                {
                    //... process and add to the FileModel list
                    byte[] bytes = Convert.FromBase64String(tuple.First);

                    Image image;
                    using (MemoryStream ms = new MemoryStream(bytes))
                    {
                        image = Image.FromStream(ms);
                        image.Save(@"Templates\" + "image" + tuple.Second.ToString() +".png", System.Drawing.Imaging.ImageFormat.Png);
                        image.Dispose();
                        ms.Dispose();
                    }
                }
            }
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
