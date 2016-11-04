
namespace proafsolutions.chat {

    interface IAccountController {
        settings: any;
    }

    export class AccountController implements IAccountController{

        public settings: any;

        constructor() {
            this.settings = {
                enableFriends: true
            };
        }
    }

    angular.module("proafsolutions").controller("AccountController", AccountController);

}

