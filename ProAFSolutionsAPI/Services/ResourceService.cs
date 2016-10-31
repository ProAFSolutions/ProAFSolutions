using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProAFSolutionsAPI.Services
{
    public class ResourceService
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

    }
}