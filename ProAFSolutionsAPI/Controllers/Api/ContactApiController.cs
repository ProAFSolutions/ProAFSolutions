
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
using static ProAFSolutionsAPI.Helpers.PDFHelper;
using System.Net.Mime;

namespace ProAFSolutionsAPI.Controllers
{
    /// <summary>
    /// Endpoint resposibe of handling logic to exchange information with our users
    /// </summary> 
    //[Authorize]   
    [RoutePrefix("contact")]   
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
            try
            {
                NotifyProAF(contact);

                if (!string.IsNullOrEmpty(contact.OfferFileName))
                {
                    LoggerProvider.Info(string.Format("Sent offer: {0}", contact.OfferFileName));
                    SendOfferEmail(contact);
                }
            }
            catch (Exception ex) {
                LoggerProvider.Error(ex.Message);
            }

            return Ok();
        }


        private void NotifyProAF(ContactModel contact) {
            var message = string.Format("NAME:{0}, EMAIL:{1}, PHONE:{2}, SUBJECT:{3}, MSG:{4},PACKAGES:{5}",
                                         contact.Name, contact.Email, contact.Phone, contact.Subject, contact.Message, contact.CheckedOptions);

            var parameters = new Dictionary<string, object>();
            parameters.Add("message", message);

            var to = ConfigurationManager.AppSettings["mailToAdmin"].Split(new char[] { ',' });
            AppServicesProvider.EmailService.SendTextEmail(
                "Somebody wants to get in touch with you!",
                to,
                message
            );

            bool sendEmail = !ConfigurationManager.AppSettings["mailMode"].Equals("off");
            if (sendEmail)
            {
                LoggerProvider.Info(string.Format("Contact Email sent to {0}", to));
            }

            bool sendSMS = bool.Parse(ConfigurationManager.AppSettings["sendSms"]);

            if (sendSMS)
            {
                var phones = ConfigurationManager.AppSettings["adminPhones"].Split(new char[] { ',' });
                phones.ToList().ForEach(phone =>
                {
                    AppServicesProvider.SMSService.Send(message, phone);
                });

                LoggerProvider.Info(string.Format("Contact Text sent to {0}", phones));
            }

        }

        private void SendOfferEmail(ContactModel contact)
        {
            try
            {

                //Template parameters to pass data
                var parameters = new Dictionary<string, object>();
                parameters.Add("contact", contact);

                //Atttachment set up
                var pdfOfferAttachment = CreateOfferAttachment(contact.Language, contact.OfferFileName);

                //Link resources to pass images 
                var resources = new List<LinkedResource>();
                string path = ResourceHelper.GetLogoPath();
                // var logoResx =  new LinkedResource(ResourceHelper.GetLogoPath(), "image/jpg")
                //  var logoResx = new LinkedResource("c:\\logo.jpg", "image/jpg");
                // string mediaType = MediaTypeNames.Image.Jpeg;

                //  logoResx.ContentType.MediaType = mediaType;
                // logoResx.ContentId = "logoId";
                // logoResx.ContentLink = new Uri("cid:" + logoResx.ContentId);
                // logoResx.ContentType.Name = logoResx.ContentId;
                // logoResx.TransferEncoding = System.Net.Mime.TransferEncoding.Base64;
                // resources.Add(logoResx);            

                AppServicesProvider.EmailService.SendHtmlEmail(
                    contact.Subject,
                    new string[] { contact.Email },
                    new HtmlMailTemplate(ResourceHelper.GetEmailTemplatePath(contact.Language, "offer-email.html"), resources, parameters),
                    new MailAttachment[] { pdfOfferAttachment }
                );
            }
            catch (Exception ex)
            {
                LoggerProvider.Error(ex.Message);

            }
           

        }

        private MailAttachment CreateOfferAttachment(string lan, string fileName) {

            try
            {
                //var offerFilePath = ResourceHelper.GetOfferPath(lan, fileName);
                var tempPath = "http://proafsolutions.com/api/Templates/Offers/";
                var offerFilePath = tempPath + lan + "/" + fileName;


                var stream = GetStreamFromUrl(offerFilePath);

               // var stream = new FileStream(offerFilePath, FileMode.Open);
                byte[] array = new byte[stream.Length];
                stream.Read(array, 0, array.Length);
                return new MailAttachment(new MemoryStream(array), fileName);
            }
            catch (Exception ex)
            {
                LoggerProvider.Error(ex.Message);
            }

            return null;
        }

        private static Stream GetStreamFromUrl(string url)
        {
            byte[] imageData = null;

            using (var wc = new System.Net.WebClient())
                imageData = wc.DownloadData(url);

            return new MemoryStream(imageData);
        }



    }
}
