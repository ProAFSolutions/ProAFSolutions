var proafsolutions;
(function (proafsolutions) {
    var chat;
    (function (chat) {
        var RoutesConfig = (function () {
            function RoutesConfig() {
            }
            RoutesConfig.setupRoutes = function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })
                    .state('tab.dashboard', {
                    url: '/dashboard',
                    views: {
                        'dashboard': {
                            templateUrl: 'templates/dashboard.html',
                            controller: 'DashboardController'
                        }
                    }
                })
                    .state('tab.users', {
                    url: '/users',
                    views: {
                        'users': {
                            templateUrl: 'templates/users.html',
                            controller: 'UsersController'
                        }
                    }
                })
                    .state('tab.details', {
                    url: '/details/:chatId',
                    views: {
                        'details': {
                            templateUrl: 'templates/details.html',
                            controller: 'DetailsController'
                        }
                    }
                })
                    .state('tab.account', {
                    url: '/account',
                    views: {
                        'account': {
                            templateUrl: 'templates/account.html',
                            controller: 'AccountController'
                        }
                    }
                });
                $urlRouterProvider.otherwise("/tab/dashboard");
            };
            return RoutesConfig;
        }());
        chat.RoutesConfig = RoutesConfig;
    })(chat = proafsolutions.chat || (proafsolutions.chat = {}));
})(proafsolutions || (proafsolutions = {}));

//# sourceMappingURL=routes.js.map
