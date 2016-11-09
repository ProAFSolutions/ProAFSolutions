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
            return string.Format("{0}/{1}/{2}", GetApplicationPath(), "Resources", fileName);
        }

        public static string GetStatsPath(string fileName)
        {
            return string.Format("{0}/{1}/{2}", GetApplicationPath(), "Resources/Stats", fileName);
        }

        //public static string GetIP4Address()
        //{
        //    string IP4Address = String.Empty;

        //    foreach (IPAddress IPA in Dns.GetHostAddresses(HttpContext.Current.Request.UserHostAddress))
        //    {
        //        if (IPA.AddressFamily.ToString() == "InterNetwork")
        //        {
        //            IP4Address = IPA.ToString();
        //            break;
        //        }
        //    }

        //    if (IP4Address != String.Empty)
        //    {
        //        return IP4Address;
        //    }

        //    foreach (IPAddress IPA in Dns.GetHostAddresses(Dns.GetHostName()))
        //    {
        //        if (IPA.AddressFamily.ToString() == "InterNetwork")
        //        {
        //            IP4Address = IPA.ToString();
        //            break;
        //        }
        //    }

        //    return IP4Address;
        //}

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