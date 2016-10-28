using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;

namespace ProAFSolutionsAPI.Services.Mail
{
   
   public static class MailConfig
    {

       public enum MailModeEnum
       {
           On = 1,
           Debug = 2,
           Off = 3
       }

       public static string MAIL_SMTP_SERVER
        {
            get
            {
                return ConfigurationManager.AppSettings["mailSmtpServer"];
            }          
        }

       public static int MAIL_SMTP_PORT
        {
            get
            {
                return int.Parse(ConfigurationManager.AppSettings["mailSmtpPort"]);
            }
           
        }

       public static bool MAIL_SSL_ENABLED
        {
            get
            {
                return bool.Parse(ConfigurationManager.AppSettings["mailSSLEnabled"]);
            }
           
        }

       public static bool MAIL_SMTP_NEEDS_AUTHENTICATION
        {
            get
            {
                return bool.Parse(ConfigurationManager.AppSettings["mailSmtpNeedsAuthentication"]);
            }
            
        }

       public static string MAIL_SMTP_AUTHENTICATION_USER
        {
            get
            {
                return ConfigurationManager.AppSettings["mailSmtpAuthenticationUser"];
            }
            
        }

       public static string MAIL_SMTP_AUTHENTICATION_PASSWORD
        {
            get
            {
               return ConfigurationManager.AppSettings["mailSmtpAuthenticationPassword"];               
            }
            
        }

       public static MailModeEnum MAIL_MODE
        {
            get
            {
                return (MailModeEnum)Enum.Parse(typeof(MailModeEnum), ConfigurationManager.AppSettings["mailMode"], true);
            }
       }

       public static string MAIL_DEBUG_PIPE
        {
            get
            {
                return ConfigurationManager.AppSettings["mailDebugPipe"];                
            }
        }

       public static string MAIL_FROM
        {
            get
            {
                return ConfigurationManager.AppSettings["mailFrom"];        
            }
           
        }

       public static string MAIL_FROM_NAME
        {
            get
            {
                return ConfigurationManager.AppSettings["mailFromName"];            
            }
           
        }

      
    }
}
