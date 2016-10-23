var proafsolutions;
(function (proafsolutions) {
    var RoutesConfig = (function () {
        function RoutesConfig() {
        }
        RoutesConfig.setupRoutes = function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("root", {
                url: '',
                views: {
                    "home": {
                        templateUrl: RoutesConfig.getTemplatePath('home'),
                        controller: "HomeController",
                        controllerAs: "vm"
                    },
                    "chat": {
                        templateUrl: RoutesConfig.getTemplatePath('chat'),
                        controller: "ChatController",
                        controllerAs: "vm"
                    },
                    "about": {
                        templateUrl: RoutesConfig.getTemplatePath('about'),
                        controller: "AboutController",
                        controllerAs: "vm"
                    },
                    "contact": {
                        templateUrl: RoutesConfig.getTemplatePath('contact'),
                        controller: "ContactController",
                        controllerAs: "vm"
                    },
                    "features": {
                        templateUrl: RoutesConfig.getTemplatePath('features'),
                        controller: "FeaturesController",
                        controllerAs: "vm"
                    },
                    "focus": {
                        templateUrl: RoutesConfig.getTemplatePath('focus'),
                        controller: "FocusController",
                        controllerAs: "vm"
                    },
                    "newsetter": {
                        templateUrl: RoutesConfig.getTemplatePath('newsetter'),
                        controller: "NewsetterController",
                        controllerAs: "vm"
                    },
                    "packages": {
                        templateUrl: RoutesConfig.getTemplatePath('packages'),
                        controller: "NewsetterController",
                        controllerAs: "vm"
                    },
                    "products": {
                        templateUrl: RoutesConfig.getTemplatePath('products'),
                        controller: "ProductsController",
                        controllerAs: "vm"
                    },
                    "purchase": {
                        templateUrl: RoutesConfig.getTemplatePath('purchase'),
                        controller: "PurchaseController",
                        controllerAs: "vm"
                    },
                    "separator": {
                        templateUrl: RoutesConfig.getTemplatePath('separator'),
                        controller: "SeparatorController",
                        controllerAs: "vm"
                    },
                    "stats": {
                        templateUrl: RoutesConfig.getTemplatePath('stats'),
                        controller: "StatsController",
                        controllerAs: "vm"
                    },
                    "team": {
                        templateUrl: RoutesConfig.getTemplatePath('team'),
                        controller: "TeamController",
                        controllerAs: "vm"
                    },
                    "testimonial": {
                        templateUrl: RoutesConfig.getTemplatePath('testimonial'),
                        controller: "TestimonialController",
                        controllerAs: "vm"
                    },
                    "works": {
                        templateUrl: RoutesConfig.getTemplatePath('works'),
                        controller: "WorksController",
                        controllerAs: "vm"
                    },
                    "footer": {
                        templateUrl: RoutesConfig.getTemplatePath('footer'),
                        controller: "FooterController",
                        controllerAs: "vm"
                    }
                }
            });
            $urlRouterProvider.otherwise("");
        };
        RoutesConfig.getTemplatePath = function (componentName) {
            return proafsolutions.AppSettings.APP_MODE == 'Debug' ? proafsolutions.AppSettings.COMPONENTS_FOLDER + '/' + componentName + '/' + componentName + '.html'
                : proafsolutions.AppSettings.DIST_FOLDER + '/' + componentName + '.min.html';
        };
        return RoutesConfig;
    }());
    proafsolutions.RoutesConfig = RoutesConfig;
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=routes.js.map