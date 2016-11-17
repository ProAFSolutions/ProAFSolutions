namespace proafsolutions {


    interface IAssistanceController {

        openChatWindowClick(): void;
    }

    class AssistanceController implements IAssistanceController {


             
        public openChatWindowClick(): void {
            var $chatIframe = $('#tawkchat-iframe-container').find('#tawkchat-minified-iframe-element-round');
            $chatIframe.contents().find("#tawkchat-status-icon").click();
        }

       
    }

    angular.module("proafsolutions").controller("AssistanceController", AssistanceController);
}