
namespace proafsolutions {

    angular.module("proafsolutions").factory("$globalErrorHandler", ($rootScope: ng.IRootScopeService) => {

        return {
            responseError: (error: ng.IHttpPromiseCallbackArg<any>) => {
                if (error.status) {
                    switch (error.status) {
                        case -1:
                        case 400:
                        case 404: {
                            $rootScope.$broadcast('HttpError!', { message: "Sorry, the system is not able to reach the server. Please try later" });                           
                        } break;

                        case 500: {
                            $rootScope.$broadcast('HttpError!', { message: "Sorry, an error has occurred on the server when processing your request. Please try later" }); 
                        } break;

                        default: {
                            $rootScope.$broadcast('HttpError!', { message: "Error, " + error.statusText });                          
                        } break;
                    }
                }
            }
        }
    });
}

    