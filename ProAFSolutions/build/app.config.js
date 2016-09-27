///<reference path="../node_modules/definitely-typed-angular/angular.d.ts" />
///<reference path="../node_modules/definitely-typed-angular/angular-resource.d.ts" />
///<reference path="../node_modules/definitely-typed-angular-ui-router/angular-ui-router.d.ts" />
///<reference path="../node_modules/definitely-typed-jquery/jquery.d.ts" />
///<reference path="../node_modules/retyped-modernizr-tsd-ambient/modernizr.d.ts" />
///<reference path="../typings/underscore.d.ts" />
var proafsolutions;
(function (proafsolutions) {
    function init($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
        $stateProvider
            .state("root", {
            url: '',
            views: {
                "home": {
                    templateUrl: 'app/components/home/home.html',
                    controller: "HomeController",
                    controllerAs: "vm"
                },
                "about": {
                    templateUrl: 'app/components/about/about.html',
                    controller: "AboutController",
                    controllerAs: "vm"
                },
                "contact": {
                    templateUrl: 'app/components/contact/contact.html',
                    controller: "ContactController",
                    controllerAs: "vm"
                },
                "features": {
                    templateUrl: 'app/components/features/features.html',
                    controller: "FeaturesController",
                    controllerAs: "vm"
                },
                "focus": {
                    templateUrl: 'app/components/focus/focus.html',
                    controller: "FocusController",
                    controllerAs: "vm"
                },
                "newsetter": {
                    templateUrl: 'app/components/newsetter/newsetter.html',
                    controller: "NewsetterController",
                    controllerAs: "vm"
                },
                "packages": {
                    templateUrl: 'app/components/packages/packages.html',
                    controller: "NewsetterController",
                    controllerAs: "vm"
                },
                "products": {
                    templateUrl: 'app/components/products/products.html',
                    controller: "ProductsController",
                    controllerAs: "vm"
                },
                "purchase": {
                    templateUrl: 'app/components/purchase/purchase.html',
                    controller: "PurchaseController",
                    controllerAs: "vm"
                },
                "separator": {
                    templateUrl: 'app/components/separator/separator.html',
                    controller: "SeparatorController",
                    controllerAs: "vm"
                },
                "stats": {
                    templateUrl: 'app/components/stats/stats.html',
                    controller: "StatsController",
                    controllerAs: "vm"
                },
                "team": {
                    templateUrl: 'app/components/team/team.html',
                    controller: "TeamController",
                    controllerAs: "vm"
                },
                "testimonial": {
                    templateUrl: 'app/components/testimonial/testimonial.html',
                    controller: "TestimonialController",
                    controllerAs: "vm"
                },
                "works": {
                    templateUrl: 'app/components/works/works.html',
                    controller: "WorksController",
                    controllerAs: "vm"
                },
                "footer": {
                    templateUrl: 'app/components/footer/footer.html',
                    controller: "FooterController",
                    controllerAs: "vm"
                }
            }
        });
        $urlRouterProvider.otherwise("");
        //$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);  
    }
    ;
    angular.module("proafsolutions", ["ngSanitize", "ngResource", "ui.router", "pascalprecht.translate"])
        .config(init);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=app.config.js.map