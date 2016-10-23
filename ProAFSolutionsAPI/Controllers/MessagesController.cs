using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProAFSolutionsAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/messages")]
    public class MessagesController : ApiController
    {

        /// <summary>
        /// Sends a message from clients in order to be contacted by ProAFSolutions
        /// </summary>
        /// <param name="value">(Required)</param>  
        [Route("contact")]
        public IHttpActionResult SendContactMessage([FromBody]string value)
        {
            return Ok();
        }
    }
}
