///<reference path="../node_modules/definitely-typed-angular/angular.d.ts" />
///<reference path="../node_modules/definitely-typed-angular-trainslate/angular-translate.d.ts" />
///<reference path="../node_modules/definitely-typed-angular-ui-router/angular-ui-router.d.ts" />
///<reference path="../node_modules/definitely-typed-jquery/jquery.d.ts" />
///<reference path="../node_modules/retyped-modernizr-tsd-ambient/modernizr.d.ts" />
///<reference path="definitely-typed/underscore.d.ts" />
///<reference path="definitely-typed/signalr.d.ts" />

namespace proafsolutions {      

    class ProAFSolutionsApp {        

       static config($stateProvider: angular.ui.IStateProvider,
                    $urlRouterProvider: angular.ui.IUrlRouterProvider,
                    $locationProvider: ng.ILocationProvider,
                    $compileProvider: ng.ICompileProvider,
                    $translateProvider: angular.translate.ITranslateProvider,
                    $httpProvider: ng.IHttpProvider): void {          

           RoutesConfig.setupRoutes($stateProvider, $urlRouterProvider);

           AppLanguageConfig.setupLanguage($translateProvider);

           ProAFSolutionsApp.initInterceptors($httpProvider);

           $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);
        }      
             

       static initInterceptors($httpProvider: ng.IHttpProvider): void {
           $httpProvider.interceptors.push("$globalErrorHandler");
       }

       //static run($publicService: services.IPublicService, $cookies: ng.cookies.ICookiesService): void {
       //    ProAFSolutionsApp.pingServer($publicService, $cookies);
       //} 

       //static pingServer($publicService: services.IPublicService, $cookies: ng.cookies.ICookiesService) {
       //    var lastAccess = $cookies.get('PROAF_LAST_ACCESS');
       //    var now = new Date();           
       //    var currentDate = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
       //    if (!lastAccess || lastAccess != currentDate) {
       //        $publicService.pingServer().then((response: ng.IHttpPromiseCallbackArg<{}>) => {
       //            var tomorrow = new Date();
       //            tomorrow.setDate(tomorrow.getDate() + 1);
       //            $cookies.put('PROAF_LAST_ACCESS', currentDate, { expires: tomorrow });
       //        });               
       //    }
       //}
   }

    angular.module("proafsolutions", ["ngSanitize", "ui.router", "ui.mask", "pascalprecht.translate", "ngCookies"])
        .config(ProAFSolutionsApp.config);
            
}