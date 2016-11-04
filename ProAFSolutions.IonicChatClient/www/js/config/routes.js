var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var RoutesConfig = (function () {
            function RoutesConfig() {
            }
            RoutesConfig.setupRoutes = function ($stateProvider, $urlRouterProvider) {
                $stateProvider;
                $stateProvider
                    .state("tab", {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })
                    .state("tab.dash", {
                    url: "/dash",
                    views: {
                        "tab-dash": {
                            templateUrl: "templates/tab-dash.html",
                            controller: "DashboardController as dash"
                        }
                    }
                })
                    .state("tab.chats", {
                    url: "/chats",
                    views: {
                        "tab-chats": {
                            templateUrl: "templates/tab-chats.html",
                            controller: "UsersController as chats"
                        }
                    }
                })
                    .state("tab.chat-detail", {
                    url: "/chats/:chatId",
                    views: {
                        "tab-chats": {
                            templateUrl: "templates/chat-detail.html",
                            controller: "DetailsController as chat"
                        }
                    }
                })
                    .state("tab.account", {
                    url: "/account",
                    views: {
                        "tab-account": {
                            templateUrl: "templates/tab-account.html",
                            controller: "AccountController as account"
                        }
                    }
                });
                // if none of the above states are matched, use this as the fallback
                $urlRouterProvider.otherwise("/tab/dash");
            };
            return RoutesConfig;
        }());
        chat.RoutesConfig = RoutesConfig;
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=routes.js.map
