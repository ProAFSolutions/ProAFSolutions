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
   }

    angular.module("proafsolutions", ["ngSanitize", "ui.router", "pascalprecht.translate", "ngCookies", "ngAudio"])
           .config(ProAFSolutionsApp.config);
            
}