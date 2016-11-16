using System.Data.Entity.Validation;
using System.Text;
using System.Web.Http.ExceptionHandling;
using ProAFSolutionsAPI.Providers;

namespace ProAFSolutionsAPI.Exceptions
{
    public class GlobalWebApiExceptionHandler : ExceptionHandler
    {      
        public override void Handle(ExceptionHandlerContext context)
        {
            LoggerProvider.Error(context.Exception.StackTrace);

            context.Result = new InternalServerErrorTextPlainResult
            {
                Content = "Sorry an unhandled error has occurred. Please try again if the problem persists contact the administrator.",
                Request = context.Request
            };
        }
    }
}
