using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Cors;
using System.Web.Cors;
using System.Threading.Tasks;
using System.Configuration;

[assembly: OwinStartup(typeof(ProAFSolutionsAPI.Startup))]

namespace ProAFSolutionsAPI
{
    public partial class Startup
    {

        private static readonly Lazy<CorsOptions> SignalrCorsOptions = new Lazy<CorsOptions>(() =>
        {
            return new CorsOptions
            {
                PolicyProvider = new CorsPolicyProvider
                {
                    PolicyResolver = context =>
                    {
                        var policy = new CorsPolicy();
                        policy.AllowAnyOrigin = false;
                        policy.AllowAnyMethod = true;
                        policy.AllowAnyHeader = true;
                        policy.SupportsCredentials = true;
                        policy.Origins.Add(ConfigurationManager.AppSettings["proafOrigin"]);

                        return Task.FromResult(policy);
                    }
                }
            };
        });

        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
            app.UseCors(SignalrCorsOptions.Value); 
            app.MapSignalR();
        }

        
    }
}
