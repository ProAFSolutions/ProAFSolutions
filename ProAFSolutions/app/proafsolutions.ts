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
                    $translateProvider: angular.translate.ITranslateProvider): void {          

           RoutesConfig.setupRoutes($stateProvider, $urlRouterProvider);

           AppLanguageConfig.setupLanguage($translateProvider);

           $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);
        }      

       static run($publicService: services.IPublicService, $cookies: ng.cookies.ICookiesService): void {
           ProAFSolutionsApp.pingServer($publicService, $cookies);
       } 

       static pingServer($publicService: services.IPublicService, $cookies: ng.cookies.ICookiesService) {
           var lastAccess = $cookies.get('PROAF_LAST_ACCESS');
           var now = new Date();
           var currentDate = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
           if (!lastAccess || lastAccess != currentDate) {
               $publicService.pingServer().then((response: ng.IHttpPromiseCallbackArg<{}>) => {
                   $cookies.put('PROAF_LAST_ACCESS', currentDate);
               });               
           }
       }
   }

    angular.module("proafsolutions", ["ngSanitize", "ui.router", "pascalprecht.translate", "ngCookies"])
        .config(ProAFSolutionsApp.config).run(ProAFSolutionsApp.run);
            
}