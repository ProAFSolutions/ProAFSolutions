namespace proafsolutions.models {

    export interface IConversation {
        room: string;
        messages: Array<models.IChatMessage>;
    }   

}