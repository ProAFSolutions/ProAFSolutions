namespace proafsolutions {

    interface IChatController {

        isVisible: boolean;

        showClick(): void;
        hideClick(): void;
    }

    class ChatController implements IChatController {


        static $inject = ['$scope']; 

        public isVisible: boolean;

        constructor(private $scope: ng.IScope) {
            this.init();           
        }

        private init(): void {
            this.isVisible = false;
        }

        
        public showClick(): void {
            this.isVisible = true;
        }

        public hideClick(): void {
            this.isVisible = false;
        }
       
    }

    angular.module("proafsolutions").controller("ChatController", ChatController);
}