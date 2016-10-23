///<reference path="../node_modules/definitely-typed-angular/angular.d.ts" />
///<reference path="../node_modules/definitely-typed-angular-trainslate/angular-translate.d.ts" />
///<reference path="../node_modules/definitely-typed-angular-ui-router/angular-ui-router.d.ts" />
///<reference path="../node_modules/definitely-typed-jquery/jquery.d.ts" />
///<reference path="../node_modules/retyped-modernizr-tsd-ambient/modernizr.d.ts" />
///<reference path="../typings/underscore.d.ts" />
/// <reference path="definitely-typed/angular-chat.d.ts" />
var proafsolutions;
(function (proafsolutions) {
    var ProAFSolutionsApp = (function () {
        function ProAFSolutionsApp() {
        }
        ProAFSolutionsApp.config = function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider, $translateProvider) {
            proafsolutions.RoutesConfig.setupRoutes($stateProvider, $urlRouterProvider);
            proafsolutions.AppLanguageConfig.setupLanguage($translateProvider);
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);
        };
        return ProAFSolutionsApp;
    }());
    angular.module("proafsolutions", ["ngSanitize", "ui.router", "pascalprecht.translate", "chat"])
        .config(ProAFSolutionsApp.config);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=proafsolutions.js.map