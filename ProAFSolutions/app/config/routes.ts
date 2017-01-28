
namespace proafsolutions {      

    export class RoutesConfig {
          
       public static setupRoutes($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider): void {

           $stateProvider
               .state("root", {
                   url: '',
                   views: {

                       "home": {
                           templateUrl: AppSettings.getTemplatePath('home'),
                           controller: "HomeController",
                           controllerAs: "vm"
                       },

                       "assistance": {
                           templateUrl: AppSettings.getTemplatePath('assistance'),
                           controller: "AssistanceController",
                           controllerAs: "vm"             
                       },

                       //"chat": {
                       //    templateurl: RoutesConfig.getTemplatePath('chat'),  
                       //    controller: "ChatController",
                       //    controllerAs: "vm"                     
                       //},

                       "about": {
                           templateUrl: AppSettings.getTemplatePath('about'),
                           controller: "AboutController",
                           controllerAs: "vm"
                       },

                       "contact": {
                           templateUrl: AppSettings.getTemplatePath('contact'),
                           controller: "ContactController",
                           controllerAs: "vm"
                       },

                       //"features": {
                       //    templateUrl: RoutesConfig.getTemplatePath('features'),
                       //    controller: "FeaturesController",
                       //    controllerAs: "vm"
                       //},

                       "focus": {
                           templateUrl: AppSettings.getTemplatePath('focus'),
                           controller: "FocusController",
                           controllerAs: "vm"
                       },

                       //"newsetter": {
                       //    templateUrl: RoutesConfig.getTemplatePath('newsetter'),
                       //    controller: "NewsetterController",
                       //    controllerAs: "vm"
                       //},

                       "packages": {
                           templateUrl: AppSettings.getTemplatePath('packages'),
                           controller: "PackagesController",
                           controllerAs: "vm"
                       },

                       "products": {
                           templateUrl: AppSettings.getTemplatePath('products'),
                           controller: "ProductsController",
                           controllerAs: "vm"
                       },

                       //"purchase": {
                       //    templateUrl: RoutesConfig.getTemplatePath('purchase'),
                       //    controller: "PurchaseController",
                       //    controllerAs: "vm"
                       //},

                       "separator": {
                           templateUrl: AppSettings.getTemplatePath('separator'),
                           controller: "SeparatorController",
                           controllerAs: "vm"
                       },

                       //"stats": {
                       //    templateUrl: RoutesConfig.getTemplatePath('stats'),
                       //    controller: "StatsController",
                       //    controllerAs: "vm"
                       //},

                       "team": {
                           templateUrl: AppSettings.getTemplatePath('team'),
                           controller: "TeamController",
                           controllerAs: "vm"
                       },

                       //"testimonial": {
                       //    templateUrl: RoutesConfig.getTemplatePath('testimonial'),
                       //    controller: "TestimonialController",
                       //    controllerAs: "vm"
                       //},

                       //"works": {
                       //    templateUrl: RoutesConfig.getTemplatePath('works'),
                       //    controller: "WorksController",
                       //    controllerAs: "vm"
                       //},

                       "footer": {
                           templateUrl: AppSettings.getTemplatePath('footer'),
                           controller: "FooterController",
                           controllerAs: "vm"
                       }
                   }
               });

           $urlRouterProvider.otherwise("");
       }       

       
   }     
}