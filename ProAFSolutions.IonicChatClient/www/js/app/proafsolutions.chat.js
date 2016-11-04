///<reference path="definitely-typed/underscore.d.ts" />
///<reference path="definitely-typed/signalr.d.ts" />
var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var ProAFSolutionsChatApp = (function () {
            function ProAFSolutionsChatApp() {
            }
            ProAFSolutionsChatApp.config = function ($stateProvider, $urlRouterProvider) {
                chat.RoutesConfig.setupRoutes($stateProvider, $urlRouterProvider);
            };
            ProAFSolutionsChatApp.run = function ($ionicPlatform) {
                $ionicPlatform.ready(function () {
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
            };
            return ProAFSolutionsChatApp;
        }());
        angular.module("proafsolutions", ["ionic"])
            .run(ProAFSolutionsChatApp.run)
            .config(ProAFSolutionsChatApp.config);
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=proafsolutions.chat.js.map
