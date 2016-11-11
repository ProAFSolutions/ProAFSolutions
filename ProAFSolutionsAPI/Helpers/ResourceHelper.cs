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

        public static string GetEmailTemplatePath(string fileName)
        {
            return string.Format("{0}/{1}/{2}", GetApplicationPath(), "Templates/Email", fileName);
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