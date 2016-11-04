///<reference path="definitely-typed/underscore.d.ts" />
///<reference path="definitely-typed/signalr.d.ts" />

namespace proafsolutions.chat {      

    class ProAFSolutionsChatApp {        

       public static config($stateProvider: angular.ui.IStateProvider,
                            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {       

           RoutesConfig.setupRoutes($stateProvider, $urlRouterProvider);         
        } 

       public static run($ionicPlatform: ionic.platform.IonicPlatformService): void {
           $ionicPlatform.ready(() => {
               // hide the accessory bar by default (remove this to show the accessory bar above the keyboard
               // for form inputs)
               if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
                   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                   cordova.plugins.Keyboard.disableScroll(true);
               }
               if (window.StatusBar) {
                   // org.apache.cordova.statusbar required
                   StatusBar.styleDefault();
               }
           });
       }  
   }

    angular.module("proafsolutions", ["ionic"])
        .run(ProAFSolutionsChatApp.run)
        .config(ProAFSolutionsChatApp.config);
            
}