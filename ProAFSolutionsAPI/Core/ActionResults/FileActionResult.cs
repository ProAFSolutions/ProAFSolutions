using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
#pragma warning disable 1591, 1573, 1572, 1570   //  Ignore "Missing XML Comment" warning    //  Ignore "Missing XML Comment" warning

namespace ProAFSolutionsAPI.Core.ActionResults
{
    public class FileActionResult : IHttpActionResult
    {
        private readonly Stream _fileSteam;

        private readonly string _contentType;

        public FileActionResult(Stream stream, string contentType) 
        {
            if(_fileSteam == null)
                throw new ArgumentNullException("stream can not be null or empty");
            _fileSteam = stream; 
        }

        public Task<HttpResponseMessage> ExecuteAsync(System.Threading.CancellationToken cancellationToken)
        {
            return Task.Run(() =>
            {
                var response = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StreamContent(_fileSteam)
                };
               
                response.Content.Headers.ContentType = new MediaTypeHeaderValue(_contentType);

                return response;

            }, cancellationToken);
        }
    }
}