
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
using ProAFSolutionsAPI.Services.Mail;
using ProAFSolutionsAPI.Services;
using System.Web.Http.Description;
using ProAFSolutionsAPI.Hubs;
using ProAFSolutionsAPI.Helpers;
using System.IO;
using ProAFSolutionsAPI.Util;
using System.Web;

namespace ProAFSolutionsAPI.Controllers
{
    //[Authorize]   
    [RoutePrefix("api/public")]
    public class PublicApiController : ApiController
    {

        /// <summary>
        /// Sends a message from clients in order to be contacted by ProAFSolutions
        /// </summary>
        /// <param name="contact">(Required)</param>  
        [Route("contact-us")]
        [HttpPost]
        public IHttpActionResult SendContactMessage(ContactModel contact)
        {
            var message = string.Format("NAME:{0}, EMAIL:{1}, PHONE:{2}, SUBJECT:{3}, MSG:{4}",
                                         contact.Name, contact.Email, contact.Phone, contact.Subject, contact.Message);

            var parameters = new Dictionary<string, object>();
            parameters.Add("message", message);

            AppServicesProvider.EmailService.SendHtmlEmail(
                ConfigurationManager.AppSettings["chatRoomJoinEmailSubject"],
                ConfigurationManager.AppSettings["mailToAdmin"].Split(new char[] { ',' }),
                new HtmlMailTemplate(ResourceHelper.GetEmailTemplatePath("basic-email-template.html"), parameters));

            //AppServicesProvider.EmailService.SendTextEmail(
            //    "Somebody wants to get in touch with you!",
            //    ConfigurationManager.AppSettings["mailToAdmin"].Split(new char[] { ',' }),
            //    message
            //);

            //var phones = ConfigurationManager.AppSettings["adminPhones"].Split(new char[] { ',' });
            //phones.ToList().ForEach(phone =>
            //{
            //    AppServicesProvider.SMSService.Send(message, phone);
            //});

            return Ok();
        }


        /// <summary>
        /// Gets all the users currently connected to the Hub
        /// </summary>      
        [Route("chat-users")]
        [HttpGet]
        [ResponseType(typeof(ChatUserData))]
        public IHttpActionResult GetChatUsers() {
            return Ok(ChatConnectionsHandler.Users);
        }

        /// <summary>
        /// Register access stats
        /// </summary>     
        [Route("register-access-stats")]
        [HttpGet]
        public IHttpActionResult Ping()
        {
            var httpRequest = HttpContext.Current.Request;

            if (!httpRequest.Url.Host.ToLower().Equals("localhost") && !httpRequest.UserHostAddress.Equals("::1")) {

                using (var client = new WebClient())
                {
                    string ip = ResourceHelper.GetClientIPAddress();
                    var path = ResourceHelper.GetStatsPath("site-stats.json");
                    var statsList = new List<StatsModel>();
                    if (File.Exists(path))
                    {
                        var statsJson = File.ReadAllText(path);
                        statsList = JsonHelper.Deserialize<List<StatsModel>>(statsJson);
                    }

                    var statsData = client.DownloadString(string.Format(ConfigurationManager.AppSettings["ipApiUrl"], ip));
                    var statsModel = JsonHelper.Deserialize<StatsModel>(statsData);
                    statsModel.IP = ip;
                    statsModel.UtcDate = DateTime.UtcNow;
                    statsList.Add(statsModel);
                    File.WriteAllText(path, JsonHelper.Serialize(statsList));
                }
            }

            return Ok();
        }
    }
}
