
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
using ProAFSolutionsAPI.Providers;
using System.Configuration;

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
            var message = string.Format("NAME:{0}, EMAIL:{1}, PHONE:{2}, SUBJECT:{3}, MSG:{4}",
                                         contact.Name, contact.Email, "", contact.Subject, contact.Message);

            AppServicesProvider.EmailService.SendTextEmail(
                "Somebody wants to get in touch with you!",
                ConfigurationManager.AppSettings["mailToAdmin"].Split(new char[] { ',' }),
                message
            );

            //var phones = ConfigurationManager.AppSettings["adminPhones"].Split(new char[] { ',' });
            //phones.ToList().ForEach(phone =>
            //{
            //    AppServicesProvider.SMSService.Send(message, phone);
            //});
          
            return Ok();
        }         
    }
}
