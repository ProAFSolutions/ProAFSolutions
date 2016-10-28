
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProAFSolutionsAPI.Services.Mail;

namespace ProAFSolutionsAPI.Services
{
    public interface IEmailService
    {
        void SendTextEmail(string from, string alias, string subject, string[] to, string text);
        void SendTextEmail(string from, string alias, string subject, string[] to, string text, MailAttachment[] attachments);
        void SendTextEmail(string subject, string[] to, string text);
        void SendTextEmail(string subject, string[] to, string text, MailAttachment[] attachments);

        void SendHtmlEmail(string from, string alias, string subject, string[] to, HtmlMailTemplate template);
        void SendHtmlEmail(string from, string alias, string subject, string[] to, HtmlMailTemplate template, MailAttachment[] attachments);
        void SendHtmlEmail(string subject, string[] to, HtmlMailTemplate template);
        void SendHtmlEmail(string subject, string[] to, HtmlMailTemplate template, MailAttachment[] attachments);
    }

    public class EmailService : IEmailService
    {

        public void SendTextEmail(string from, string alias, string subject, string[] to, string text)
        {
            MailSender.SendMail(new MailData
            {
                MailFrom = from,
                MailFromName = alias,
                Subject = subject,
                MailTo = to.ToList<string>(),
                Body = text,
                IsBodyHtml = false
            });
        }

        public void SendTextEmail(string subject, string[] to, string text)
        {
            this.SendTextEmail(MailConfig.MAIL_FROM, MailConfig.MAIL_FROM_NAME, subject, to, text);
        }

        public void SendTextEmail(string from, string alias, string subject, string[] to, string text, MailAttachment[] attachments)
        {
            MailSender.SendMail(new MailData
            {
                MailFrom = from,
                MailFromName = alias,
                Subject = subject,
                MailTo = to.ToList<string>(),
                Body = text,
                IsBodyHtml = false,
                Attachments = attachments.ToList<MailAttachment>()
            });
        }

        public void SendTextEmail(string subject, string[] to, string text, MailAttachment[] attachments)
        {
            this.SendTextEmail(MailConfig.MAIL_FROM, MailConfig.MAIL_FROM_NAME, subject, to, text, attachments);
        }

        public void SendHtmlEmail(string from, string alias, string subject, string[] to, HtmlMailTemplate template)
        {
            MailSender.SendMail(new MailData
            {
                MailFrom = from,
                MailFromName = alias,
                Subject = subject,
                MailTo = to.ToList<string>(),
                IsBodyHtml = true,
                Template = template
            });
        }

        public void SendHtmlEmail(string subject, string[] to, HtmlMailTemplate template)
        {
            this.SendHtmlEmail(MailConfig.MAIL_FROM, MailConfig.MAIL_FROM_NAME, subject, to, template);
        }

        public void SendHtmlEmail(string from, string alias, string subject, string[] to, HtmlMailTemplate template, MailAttachment[] attachments)
        {
            MailSender.SendMail(new MailData
            {
                MailFrom = from,
                MailFromName = alias,
                Subject = subject,
                MailTo = to.ToList<string>(),
                IsBodyHtml = true,
                Template = template,
                Attachments = attachments.ToList<MailAttachment>()
            });
        }
        public void SendHtmlEmail(string subject, string[] to, HtmlMailTemplate template, MailAttachment[] attachments)
        {
            this.SendHtmlEmail(MailConfig.MAIL_FROM, MailConfig.MAIL_FROM_NAME, subject, to, template, attachments);
        }
    }
}