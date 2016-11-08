var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var RoutesConfig = (function () {
            function RoutesConfig() {
            }
            RoutesConfig.setupRoutes = function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state("tab", {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })
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
            };
            return RoutesConfig;
        }());
        chat.RoutesConfig = RoutesConfig;
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=routes.js.map
