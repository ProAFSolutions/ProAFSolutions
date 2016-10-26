
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProAFSolutionsAPI.Models;
using System.Web.Http.Cors;
using Twilio;
using System.Diagnostics;
using System.Net.Mail;

namespace ProAFSolutionsAPI.Controllers
{
    //[Authorize]
    [RoutePrefix("api/messages")]  
    public class MessagesController : ApiController
    {

        /// <summary>
        /// Sends a message from clients in order to be contacted by ProAFSolutions
        /// </summary>
        /// <param name="contact">(Required)</param>  
        [Route("contact")]
        [HttpPost]
        public IHttpActionResult SendContactMessage(ContactModel contact)
        {
            //todo: Send email and|or text
            return Ok();
        }

        private void SendSMS(string text, string phoneNumber)
        {
            var accountSid = "AC503e8b4cdf8a7fee94e79568bed71651"; // Your Account SID from www.twilio.com/console
            var authToken = "d853c44bc9035960eedaf51ebc4f1aef";  // Your Auth Token from www.twilio.com/console

            var twilioClient = new TwilioRestClient(accountSid, authToken);
            var message = twilioClient.SendMessage("+17864754911", phoneNumber, text);
            if (message.RestException != null)
            {
                var error = message.RestException.Message;
                Debug.WriteLine("Error: " + error);
            }
        }

        private void SendEmail(string[] to) {

            using (var client = new SmtpClient()) {
                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.Credentials = new System.Net.NetworkCredential("proafsolutions@gmail.com", "test123");
                client.Timeout = 10000;

                var message = new MailMessage();
                message.From = new MailAddress("proafsolutions@gmail.com", "ProAFSolutions System");
                message.Body = "Text here!!!";
                to.ToList().ForEach(A => message.To.Add(A));

                try
                {
                    client.Send(message);
                }
                catch (Exception ex) {
                    Debug.WriteLine("Error: " + ex.Message);
                }                
            }          
        }
         
    }
}
