///<reference path="../node_modules/definitely-typed-angular/angular.d.ts" />
///<reference path="../node_modules/definitely-typed-angular-trainslate/angular-translate.d.ts" />
///<reference path="../node_modules/definitely-typed-angular-ui-router/angular-ui-router.d.ts" />
///<reference path="../node_modules/definitely-typed-jquery/jquery.d.ts" />
///<reference path="../node_modules/retyped-modernizr-tsd-ambient/modernizr.d.ts" />
///<reference path="definitely-typed/underscore.d.ts" />
///<reference path="definitely-typed/signalr.d.ts" />

namespace proafsolutions {      

    class ProAFSolutionsApp {        

       public static config($stateProvider: angular.ui.IStateProvider,
                         $urlRouterProvider: angular.ui.IUrlRouterProvider,
                         $locationProvider: ng.ILocationProvider,
                         $compileProvider: ng.ICompileProvider,
                         $translateProvider: angular.translate.ITranslateProvider): void {          

           RoutesConfig.setupRoutes($stateProvider, $urlRouterProvider);

           AppLanguageConfig.setupLanguage($translateProvider);

           $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);
        }      

       public static run($http: ng.IHttpService, $cookies: ng.cookies.ICookiesService): void {

           var lastAccess = $cookies.get('lastAccess');

           var now = new Date();
           var currentDate = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();


           if (!lastAccess || lastAccess != currentDate) {

               $http.post(AppSettings.API_URL + "/public/register-access-stats", {}).success((response: ng.IHttpPromiseCallbackArg<{}>) => {
                   $cookies.put('lastAccess', currentDate);
               });
           }
       }    
   }

    angular.module("proafsolutions", ["ngSanitize", "ui.router", "pascalprecht.translate", "ngCookies"])
        .config(ProAFSolutionsApp.config).run(ProAFSolutionsApp.run);
            
}