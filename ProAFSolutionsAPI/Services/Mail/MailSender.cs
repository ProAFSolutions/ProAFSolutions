using System;
using System.Collections.Generic;
using System.Threading;
using System.Net;
using System.Net.Mail;
using System.Diagnostics;

namespace ProAFSolutionsAPI.Services.Mail
{
 
    public class MailSender
    {

        public static void SendMail(MailData data)
        {
            new Thread(Send).Start(data);
        }
      

        private static void Send(object data)
        {
            MailData mailData = (MailData)data;
            var mailMessage = MailHelper.CreateMail(mailData);
            SendMessage(mailMessage);
        }


        private static void SendMessage(MailMessage mailMessage)
        {           
            if (mailMessage.To.Count > 0)
            {
                var smtpClient = new SmtpClient(MailConfig.MAIL_SMTP_SERVER, MailConfig.MAIL_SMTP_PORT);
                smtpClient.EnableSsl = MailConfig.MAIL_SSL_ENABLED;

                if (MailConfig.MAIL_SMTP_NEEDS_AUTHENTICATION)
                {
                    var networkCredential = new NetworkCredential(MailConfig.MAIL_SMTP_AUTHENTICATION_USER, MailConfig.MAIL_SMTP_AUTHENTICATION_PASSWORD);
                    smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtpClient.Credentials = networkCredential;
                }

                if (!MailConfig.MAIL_MODE.Equals(MailConfig.MailModeEnum.Off))
                {
                    try
                    {
                        smtpClient.Send(mailMessage);
                    }
                    catch (Exception ex)
                    {
                        Debug.WriteLine(ex.Message);
                    }
                }
            }
        }
        
      
       
    }
}
