using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Mail;
using System.Net;
using System.Net.Mime;
using System.IO;


namespace ProAFSolutionsAPI.Services.Mail
{
 
    public class HtmlMailTemplate
    {

        private AlternateView template = null;

        public string HtmlContent { get; set; }


        public AlternateView View
        {
            get { return template; }
        }        
        

        public HtmlMailTemplate(string templateURL, List<LinkedResource> resources)
        {
            this.CreateTemplate(templateURL, resources, new Dictionary<string, object>());            
        }


        public HtmlMailTemplate(string templateURL, Dictionary<string, object> parameters)
        {
            this.CreateTemplate(templateURL, null, parameters);   
        }   


        public HtmlMailTemplate(string templateURL, List<LinkedResource> resources, Dictionary<string, object> parameters)
        {
            this.CreateTemplate(templateURL, resources, parameters);   
        }


        private void CreateTemplate(string templateURL, List<LinkedResource> resources, Dictionary<string, object> parameters)
        {
            this.HtmlContent = NVelocityTemplateUtil.BuildHtmlBody(templateURL, parameters);

            this.template = AlternateView.CreateAlternateViewFromString(this.HtmlContent, Encoding.UTF8, MediaTypeNames.Text.Html);

            if (resources != null)
            {
                resources.ForEach(R => this.template.LinkedResources.Add(R));
            }
        }
        

    }
}
