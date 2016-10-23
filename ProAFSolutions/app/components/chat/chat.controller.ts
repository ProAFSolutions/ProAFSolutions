namespace proafsolutions {

    interface IChatController {

       
    }

    class ChatController implements IChatController {


        static $inject = ['Messages', '$scope']; 
      

        constructor(private Messages: AngularChat, private $scope: ng.IScope) {
            this.init();           
        }

        private init(): void {

            this.Messages.send = () => {

            };

            this.Messages.receive = (message: string) => {

            };
        }

        

       
    }

    angular.module("proafsolutions").controller("ChatController", ChatController);
}