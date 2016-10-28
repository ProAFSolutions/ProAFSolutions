namespace proafsolutions.models {

    export interface IChatMessage {
        name: string;
        roomName: string;
        text: string;
        datetime: string;
        avatarUrl: string;
    }

    export class ChatMessage implements IChatMessage {

        public roomName: string;

        constructor(public name: string,                              
                    public text: string,
                    public datetime: string,
                    public avatarUrl: string) {
        }
    }

}