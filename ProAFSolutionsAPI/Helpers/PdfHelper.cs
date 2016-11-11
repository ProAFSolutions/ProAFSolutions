using System;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.Linq;
using System.Web;
using TuesPechkin;

namespace ProAFSolutionsAPI.Helpers
{
    public class PDFHelper
    {
       private static IConverter converter = new ThreadSafeConverter(
                                    new RemotingToolset<PdfToolset>(
                                        new Win32EmbeddedDeployment(
                                            new TempFolderDeployment())));

        public enum DataType
        {
            HTML,
            URL
        }

        public static byte[] ConvertToPdf(DataType type, string data, string documentName)
        {
            var webSettings = new WebSettings
            {
                EnableJavascript = true,
                LoadImages = true,
                EnableIntelligentShrinking = true
            };

            ObjectSettings objSettings = null;

            if (type == DataType.HTML)
                objSettings = new ObjectSettings { HtmlText = data, WebSettings = webSettings };
            else
                objSettings = new ObjectSettings { PageUrl = data, WebSettings = webSettings };

            var document = new HtmlToPdfDocument
            {
                GlobalSettings =
                {
                    ProduceOutline = true,
                    DocumentTitle = documentName,
                    PaperSize = PaperKind.Letter,
                    UseCompression = true,
                    ImageDPI = 600,
                    ImageQuality = 100,


                    //DPI = 1200,
                    Margins =
                    {
                        Top = 1,
                        Right = 0.5,
                        Bottom = 1,
                        Left = 0.5,
                        Unit = Unit.Centimeters
                    }
                },
                Objects = {
                   objSettings
                }
            };

            return converter.Convert(document);
        }
    }
}