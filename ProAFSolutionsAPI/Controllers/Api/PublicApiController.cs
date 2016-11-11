
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
    [RoutePrefix("api/public")]
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
