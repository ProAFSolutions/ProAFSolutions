module proafsolutions.shared {
   

    export interface IBaseController {      

        init(): void;

        showErrorMessage(message: string): void;
        showInfoMessage(message: string): void;
        showWarnMessage(message: string): void;

        showLoadingScreen(): void;
        hideLoadingScreen(): void;

        handleCallbackOnError(error: any): void;
    }    

    export abstract class BaseController  {       
       
    }
}
