var proafsolutions;
(function (proafsolutions) {
    var services;
    (function (services) {
        var MessageService = (function () {
            function MessageService($http) {
                this.$http = $http;
            }
            MessageService.prototype.sendMessage = function (contactMessage) {
                return this.$http.post("http://localhost:5565/api/messages/contact", contactMessage);
            };
            MessageService.$inject = ['$http'];
            return MessageService;
        }());
        services.MessageService = MessageService;
        angular.module("proafsolutions").service("$messageService", MessageService);
    })(services = proafsolutions.services || (proafsolutions.services = {}));
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=message.service.js.map