
namespace proafsolutions {      

    export class ChatConfig {

        static "pubnub" : {
            "publish-key": "YOUR_PUBLISH_API_KEY",
            "subscribe-key": "YOUR_SUBSCRIBE_API_KEY"
        }
      
    }

    angular.module('cws')
        .constant('config', ChatConfig);
}