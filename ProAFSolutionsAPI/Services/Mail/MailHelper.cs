using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Mail;

namespace ProAFSolutionsAPI.Services.Mail
{

   public class MailHelper
    {               
      
       public static MailMessage CreateMail(MailData data)
        {
         
            var mailMessage = new MailMessage { From = new MailAddress(data.MailFrom, data.MailFromName),
                                                Subject = data.Subject                
                                               };
           
            if (MailConfig.MAIL_MODE.Equals(MailConfig.MailModeEnum.Debug))
                mailMessage.To.Add(new MailAddress(MailConfig.MAIL_DEBUG_PIPE));

            else
                data.MailTo.ForEach(a => mailMessage.To.Add(new MailAddress(a)));
            
            
            if (data.Attachments.Count > 0) {
                
                foreach(var mailAttachment in data.Attachments){
                   
                    if(mailAttachment.InMemory)
                       mailMessage.Attachments.Add(new Attachment(mailAttachment.Stream, mailAttachment.Name));
 
                    else
                        mailMessage.Attachments.Add(new Attachment(mailAttachment.File.FullName));
                }                
            }               

           
            if (data.IsBodyHtml)
            {
                mailMessage.AlternateViews.Add(data.Template.View);              
                mailMessage.IsBodyHtml = true;
            }

            else {
                mailMessage.Body = data.Body;
                mailMessage.IsBodyHtml = false;
            }              

            return mailMessage;
        }       
    }
}
