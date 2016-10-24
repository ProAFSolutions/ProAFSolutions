var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proafsolutions;
(function (proafsolutions) {
    var ContactController = (function (_super) {
        __extends(ContactController, _super);
        function ContactController($scope, $dataContext, $messageService) {
            _super.call(this, $scope, $dataContext);
            this.$dataContext = $dataContext;
            this.$messageService = $messageService;
            this.init();
        }
        ContactController.prototype.init = function () { };
        ContactController.prototype.sendContactMessage = function () {
            this.$messageService.sendMessage(this.contactMessage);
        };
        ContactController.$inject = ['$scope', '$dataContext', '$messageService'];
        return ContactController;
    }(proafsolutions.shared.BaseController));
    angular.module("proafsolutions").controller("ContactController", ContactController);
})(proafsolutions || (proafsolutions = {}));
//# sourceMappingURL=contact.controller.js.map