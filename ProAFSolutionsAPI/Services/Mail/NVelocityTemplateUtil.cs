using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NVelocity.Util;
using NVelocity.App;
using NVelocity;
using System.IO;

namespace ProAFSolutionsAPI.Services.Mail
{
   public static class NVelocityTemplateUtil
    {

        public static string BuildHtmlBody(string templateURL, Dictionary<string, object> parameters)
        {
            string templateContent = StringUtils.FileContentsToString(templateURL);

            return RenderTemplateContent(templateContent, parameters);
        }


        private static string RenderTemplateContent(string templateContent, IDictionary<string, object> data)
        {
            if (string.IsNullOrEmpty(templateContent))
                throw new ArgumentException("Template content cannot be null", "templateContent");

            var engine = new VelocityEngine();

            engine.Init();

            var context = GetContext(data);

            using (var writer = new StringWriter())
            {
                engine.Evaluate(context, writer, "", templateContent);

                return writer.GetStringBuilder().ToString();
            }
        }


        private static VelocityContext GetContext(IDictionary<string, object> data)
        {
            var context = new VelocityContext();
            var templateData = data ?? new Dictionary<string, object>();
            foreach (var key in templateData.Keys)
            {
                context.Put(key, templateData[key]);
            }
            return context;
        }

    }
}
