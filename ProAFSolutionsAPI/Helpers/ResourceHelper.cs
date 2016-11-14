using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace ProAFSolutionsAPI.Helpers
{
    public class ResourceHelper
    {
        public static string GetApplicationPath()
        {
            return HttpContext.Current.Request.PhysicalApplicationPath != null && HttpContext.Current.Request.PhysicalApplicationPath.EndsWith("/")
                           ? HttpContext.Current.Request.PhysicalApplicationPath
                           : HttpContext.Current.Request.PhysicalApplicationPath + "/";
        }

        public static string GetSiteRoot(bool usePort = true, bool useHttpProtocol = true, string protocol = null)
        {
            var context = HttpContext.Current;

            var port = context.Request.ServerVariables["SERVER_PORT"];

            if (usePort)
            {
                if (port == null || port == "80" || port == "443")
                {
                    port = "";
                }
                else
                {
                    port = ":" + port;
                }
            }

            var serverPortSecure = context.Request.ServerVariables["SERVER_PORT_SECURE"];

            if (protocol == null && (serverPortSecure == null || serverPortSecure == "0" || useHttpProtocol))
            {
                protocol = "http://";
            }
            else if (protocol == null && (serverPortSecure != "0"))
            {
                protocol = "https://";
            }

            var appPath = context.Request.ApplicationPath;

            var sOut = protocol + context.Request.ServerVariables["SERVER_NAME"] + port + appPath;

            return sOut.EndsWith("/") ? sOut : sOut + "/";
        }

        public static string GetLogoPath()
        {
            return string.Format("{0}/{1}", GetApplicationPath(), "Content/logo.png");
        }

        public static string GetEmailTemplatePath(string lan, string fileName)
        {
            return string.Format("{0}/{1}/{2}/{3}", GetApplicationPath(), "Templates/Email", lan, fileName);
        }

        public static string GetPdfTemplatePath(string lan, string fileName)
        {
            return string.Format("{0}/{1}/{2}/{3}", GetApplicationPath(), "Templates/Pdf", lan, fileName);
        }

        public static string GetStatsPath(string fileName)
        {
            return string.Format("{0}/{1}/{2}", GetApplicationPath(), "App_Data/Stats", fileName);
        }       

        public static string GetClientIPAddress()
        {
            var httpRequest = HttpContext.Current.Request;
            string ip = String.Empty;

            if (httpRequest.ServerVariables["HTTP_X_FORWARDED_FOR"] != null)
                ip = httpRequest.ServerVariables["HTTP_X_FORWARDED_FOR"].ToString();

            else if (!String.IsNullOrWhiteSpace(httpRequest.UserHostAddress))
                ip = httpRequest.UserHostAddress;

            if (ip == "::1")
                ip = "127.0.0.1";

            return ip;
        }
    }
}