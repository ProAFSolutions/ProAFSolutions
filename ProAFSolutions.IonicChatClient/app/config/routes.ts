
namespace proafsolutions.chat {      

    export class RoutesConfig {
          
       public static setupRoutes($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider): void {

           $stateProvider
               // setup an abstract state for the tabs directive
               .state("tab", {
                   url: "/tab",
                   abstract: true,
                   templateUrl: "templates/tabs.html"
               })
               // each tab has its own nav history stack:
               //.state("tab.dash", {
               //    url: "/dash",
               //    views: {
               //        "tab-dash": {
               //            templateUrl: "templates/tab-dash.html",
               //            controller: "DashboardController as vm"
               //        }
               //    }
               //})

               .state("tab.users", {
                   url: "/users",
                   views: {
                       "tab-users": {
                           templateUrl: "templates/tab-users.html",
                           controller: "UsersController as vm"
                       }
                   }
               })
               .state("tab.chat", {
                   url: "/users/:name/:room",
                   views: {
                       "tab-users": {
                           templateUrl: "templates/tab-chat.html",
                           controller: "ChatController as vm"
                       }
                   }
               })

               .state("tab.account", {
                   url: "/account",
                   views: {
                       "tab-account": {
                           templateUrl: "templates/tab-account.html",
                           controller: "AccountController as vm"
                       }
                   }
               });

           // if none of the above states are matched, use this as the fallback
           $urlRouterProvider.otherwise("/tab/users");
       }       

   }     
}