﻿using System;
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

        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);            
            //app.MapSignalR();
        }

    }
}
