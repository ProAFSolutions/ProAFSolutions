using ProAFSolutionsAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProAFSolutionsAPI.Providers
{
    public static class AppServicesProvider
    {
        public static IEmailService EmailService
        {
            get
            {
                return new EmailService();
            }
        }

        public static ISMSService SMSService
        {
            get
            {
                return new SMSService();
            }
        }
    }
}