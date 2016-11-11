
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
using System.Text;
using System.Net.Http.Headers;

namespace ProAFSolutionsAPI.Controllers
{
    /// <summary>
    /// Endpoint resposibe of handling chat data-related
    /// </summary>  
    //[Authorize]   
    [RoutePrefix("api/chat")]
    public class ChatApiController : ApiController
    {
       

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
        /// Email Chat Conversation
        /// </summary> 
        [Route("email-conversation")]
        [HttpPost]
        public IHttpActionResult EmailConversation(ChatConversationModel conversation) {

            var parameters = new Dictionary<string, object>();
            parameters.Add("messages", conversation.Messages);

            AppServicesProvider.EmailService.SendHtmlEmail(
                ConfigurationManager.AppSettings["chatConversationEmailSubject"],
                new string[] { conversation.Room },
                new HtmlMailTemplate(ResourceHelper.GetEmailTemplatePath("en-US", "email-conversation-template.html"), 
                parameters
            ));

            return Ok();
        }

        /// <summary>
        /// Returns a .txt file witn the conversation inside of it
        /// </summary> 
        [Route("save-conversation")]
        [HttpPost]
        public HttpResponseMessage SaveConversation(ChatConversationModel conversation)
        {
            if(conversation != null && conversation.Messages.Count > 0)
            {
                using (var stream = new MemoryStream()) {

                    stream.Position = 0;

                    StreamWriter conversationWriter = new StreamWriter(stream, Encoding.UTF8);
                    conversationWriter.WriteLine("Chat conversation as of " + DateTime.Now.ToShortDateString());
                    conversationWriter.WriteLine("******************************************************************************************************");

                    conversation.Messages.ForEach(M =>
                    {
                        conversationWriter.WriteLine(string.Format("{0}: {1}", M.Name.Equals(ConfigurationManager.AppSettings["adminCode"]) ? "ProAF" : M.Name, M.Text));
                        conversationWriter.WriteLine("------------------------------------------------------------------------------------------------------");
                    });

                    conversationWriter.Flush();                               

                    var result = new HttpResponseMessage(HttpStatusCode.OK)
                    {
                        Content = new ByteArrayContent(stream.GetBuffer())
                    };

                    result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                    {
                        FileName = "conversation.txt"
                    };
                    result.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");

                    return result;
                }
                
            }

            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
    }
}
