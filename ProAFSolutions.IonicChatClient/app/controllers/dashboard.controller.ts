namespace proafsolutions.chat {

    interface IDashboardController {

    }

    export class DashboardController implements IDashboardController {
        constructor() {
            console.log("Dash Controller");
        }
    }

    angular.module("proafsolutions").controller("DashboardController", DashboardController);

}