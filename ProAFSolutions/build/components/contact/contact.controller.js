var proafsolutions;
(function (proafsolutions) {
    var ContactController = (function () {
        function ContactController($scope, $dataContext, $messageService) {
            this.$scope = $scope;
            this.$dataContext = $dataContext;
            this.$messageService = $messageService;
            this.init();
        }
        ContactController.prototype.init = function () { };
        ContactController.prototype.sendContactMessage = function () {
            //todo: callback 
            this.$messageService.sendMessage(this.contactMessage);
        };
        ContactController.$inject = ['$scope', '$dataContext', '$messageService'];
        return ContactController;
    }());
    angular.module("proafsolutions").controller("ContactController", ContactController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=contact.controller.js.map