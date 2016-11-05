using ProAFSolutionsAPI.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Twilio;

namespace AppMain
{
    class Program
    {
        static void Main(string[] args)
        {
            SendSmsTest();         

        }

        private static void SendSmsTest()
        {
            var accountSid = "AC6147dbff2d0c6b8726ac59c40b01afe6"; // Your Account SID from www.twilio.com/console
            var authToken = "418ec653ad883ef6ab0c28f428cc4d70";  // Your Auth Token from www.twilio.com/console

            var twilioClient = new TwilioRestClient(accountSid, authToken);
            var message = twilioClient.SendMessage("+17864754911", "+18135803994", "testing message !");

            if (message.RestException != null)
            {
                var error = message.RestException.Message;
                Console.WriteLine(error);

            }
            else
            {
                Console.WriteLine("second message sent !");
            }
        }
    }
}
