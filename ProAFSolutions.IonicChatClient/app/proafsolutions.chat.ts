///<reference path="definitely-typed/underscore.d.ts" />
///<reference path="definitely-typed/signalr.d.ts" />
///<reference path="definitely-typed/ngcordova.d.ts" />

namespace proafsolutions.chat {      

   

    class ProAFSolutionsChatApp { 

       public static config($stateProvider: angular.ui.IStateProvider,
                            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {       

           RoutesConfig.setupRoutes($stateProvider, $urlRouterProvider);         
        } 

       public static run($ionicPlatform: ionic.platform.IonicPlatformService): void {
           $ionicPlatform.ready(() => {             

               if (AppSettings.CURRENT_RUN_MODE == RUN_MODE.MOBILE) {

                   if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
                       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                       cordova.plugins.Keyboard.disableScroll(true);
                   }
                   if (window.StatusBar) {
                       StatusBar.styleDefault();
                   }
               }            
           });
       }  
   }

    angular.module("proafsolutions", ["ionic", "ngCordova"])
        .run(ProAFSolutionsChatApp.run)
        .config(ProAFSolutionsChatApp.config);
            
}