namespace proafsolutions.models {

    export interface IChatMessage {
        name: string;
        text: string;
        datetime: string;
        avatarUrl: string;
    }

    export class ChatMessage implements IChatMessage {

        constructor(public name: string,            
                    public text: string,
                    public datetime: string,
                    public avatarUrl: string) {
        }
    }

}