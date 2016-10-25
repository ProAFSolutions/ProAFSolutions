
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProAFSolutionsAPI.Models;
using System.Web.Http.Cors;

namespace ProAFSolutionsAPI.Controllers
{
    //[Authorize]
    [RoutePrefix("api/messages")]  
    public class MessagesController : ApiController
    {

        /// <summary>
        /// Sends a message from clients in order to be contacted by ProAFSolutions
        /// </summary>
        /// <param name="contact">(Required)</param>  
        [Route("contact")]
        [HttpPost]
        public IHttpActionResult SendContactMessage(ContactModel contact)
        {
            //todo: Send email and|or text
            return Ok();
        }
    }
}
