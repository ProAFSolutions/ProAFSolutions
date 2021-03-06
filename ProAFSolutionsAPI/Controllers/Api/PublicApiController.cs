﻿
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
    /// Endpoint resposibe of exposing public operations 
    /// </summary>  
    //[Authorize]   
    [RoutePrefix("public")]
    public class PublicApiController : ApiController
    {

        /// <summary>
        /// Register access stats
        /// </summary>     
        [Route("ping")]
        [HttpGet]
        public IHttpActionResult Ping()
        {
            var httpRequest = HttpContext.Current.Request;

            if (!httpRequest.Url.Host.ToLower().Equals("localhost") && !httpRequest.UserHostAddress.Equals("::1")) {

                using (var client = new WebClient())
                {
                    string ip = ResourceHelper.GetClientIPAddress();                                        
                    var statsList = AppServicesProvider.StatsService.GetAccessStats();

                    var statsData = client.DownloadString(string.Format(ConfigurationManager.AppSettings["ipApiUrl"], ip));
                    var statsModel = JsonHelper.Deserialize<StatsModel>(statsData);
                    statsModel.IP = ip;
                    statsModel.UtcDate = DateTime.UtcNow;
                    statsList.Add(statsModel);

                    LoggerProvider.Info(string.Format("Ping data downloaded IP:{0}", ip));

                    AppServicesProvider.StatsService.WriteAccessStats(statsList);

                    var to = ConfigurationManager.AppSettings["mailToAdmin"].Split(new char[] { ',' });

                    AppServicesProvider.EmailService.SendTextEmail(
                       "ProAF Accesss Notification!",
                       to,
                       string.Format("Someone from the city of {0} using this IP address {1} has accessed ProAFsolutions website.", statsModel.City, statsModel.IP)
                   );

                    bool sendEmail = !ConfigurationManager.AppSettings["mailMode"].Equals("off");
                    if (sendEmail)
                    {
                        LoggerProvider.Info(string.Format("Ping Email sent to {0}", to));
                    }
                }
            }

            return Ok();
        }
    }
}
