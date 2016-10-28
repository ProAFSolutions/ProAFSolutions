using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Web;
using Twilio;

namespace ProAFSolutionsAPI.Services
{
    public interface ISMSService
    {
        void Send(string text, string phoneNumber);
    }

    public class SMSService : ISMSService
    {
        public void Send(string text, string phoneNumber)
        {
            var accountSid = ConfigurationManager.AppSettings["accountSid"]; // Your Account SID from www.twilio.com/console
            var authToken =  ConfigurationManager.AppSettings["authToken"];  // Your Auth Token from www.twilio.com/console

            var twilioClient = new TwilioRestClient(accountSid, authToken);
            var message = twilioClient.SendMessage(ConfigurationManager.AppSettings["fromNumber"], phoneNumber, text);
            if (message.RestException != null)
            {
                var error = message.RestException.Message;
                Debug.WriteLine("Error: " + error);
            }
        }
    }
}