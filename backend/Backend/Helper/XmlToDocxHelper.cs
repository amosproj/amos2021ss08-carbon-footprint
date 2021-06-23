using System;
using System.IO;
using System.IO.Compression;
using System.Xml.Linq;

namespace Backend.Helper
{
    public static class XmlToDocxHelper
    {

        public static void ZipDOCX(this string unzipPath, string fileName)
        {

            if (File.Exists(fileName))
            {
                File.Delete(fileName);
            }

            ZipFile.CreateFromDirectory(unzipPath, fileName);

        }

        public static string UnzipDOCX(this string zipPath)
        {
            string[] subs = zipPath.Split('.', StringSplitOptions.RemoveEmptyEntries);

            using (ZipArchive archive = ZipFile.OpenRead(zipPath))
            {
                if (Directory.Exists(subs[0]))
                {
                    Directory.Delete(subs[0], true);
                }

                archive.ExtractToDirectory(subs[0]);

            }

            return subs[0];
        }

        //public static string XmlToString(this string xmlDirectory, string xmlPath)
        //{
        //    XDocument document = XDocument.Load(xmlDirectory + xmlPath);
        //    string docString = document.ToString();

        //    return docString;
        //}

        //public static void StringToXml(this string xmlDirectory, string xmlPath, string documentString)
        //{
        //    XDocument xDocument = XDocument.Parse(documentString, LoadOptions.PreserveWhitespace);
        //    xDocument.Save(xmlDirectory + xmlPath);
        //}

    }
}
