
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
using ProAFSolutionsAPI.Templates;
using static ProAFSolutionsAPI.Helpers.PDFHelper;

namespace ProAFSolutionsAPI.Controllers
{
    /// <summary>
    /// Endpoint resposibe of handling logic to exchange information with our users
    /// </summary> 
    //[Authorize]   
    [RoutePrefix("api/contact")]
    public class ContactApiController : ApiController
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
                new HtmlMailTemplate(ResourceHelper.GetEmailTemplatePath("en-US", "basic-email-template.html"), parameters));         

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
        /// 
        /// </summary>
        /// <param name="contact">(Required)</param>  
        [Route("send-store-offer")]
        [HttpPost]
        public IHttpActionResult SendOnlineStoreOffer(ContactModel contact)
        {
            var parameters = new Dictionary<string, object>();
            parameters.Add("logo", "???");
            parameters.Add("contactModel", contact);

            var pdfOfferAttachment = CreateOnlineStoreOfferAttachment();            

            AppServicesProvider.EmailService.SendHtmlEmail(
                "Testing Offer",
                ConfigurationManager.AppSettings["mailToAdmin"].Split(new char[] { ',' }),
                new HtmlMailTemplate(ResourceHelper.GetEmailTemplatePath("en-US", TemplatesConst.EMAIL_OFFER_STORE), parameters),
                new MailAttachment[] { pdfOfferAttachment });

            return Ok();
        }

        private MailAttachment CreateOnlineStoreOfferAttachment() {

            var docName = "ProAFSolutions - Online Store Offer.pdf";

            var pdfTemplateParams = new Dictionary<string, object>();
            pdfTemplateParams.Add("siteRoot", ResourceHelper.GetSiteRoot());
            pdfTemplateParams.Add("title", "Test");
            pdfTemplateParams.Add("priceDev", "$2,000.00");

            var data = PDFHelper.ConvertToPdf(DataType.HTML, 
                                              NVelocityTemplateUtil.BuildHtmlBody(ResourceHelper.GetPdfTemplatePath("en-US", TemplatesConst.PDF_OFFER_STORE), pdfTemplateParams), docName);

            return  new MailAttachment(new MemoryStream(data), docName);
        }



    }
}
