using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace ProAFSolutionsAPI.Services.Mail
{
    public class MailData
    {       
        
        public string Subject { get; set; }
        
        public string MailFrom { get; set; }
            
        public string MailFromName { get; set; }
            
        public List<string> MailTo { get; set; }
            
        public string Body { get; set; }
            
        public bool IsBodyHtml { get; set; }

        public HtmlMailTemplate Template { get; set; }     

        private List<MailAttachment> attachments = new List<MailAttachment>();

        public List<MailAttachment> Attachments
        {
            get { return attachments; }
            set { attachments = value; }
        }
       
    }
}
