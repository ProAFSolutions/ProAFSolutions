namespace proafsolutions.models {

    export interface IContactMessage {
        name: string;
        email: string;
        subject: string;
        message: string;
        phone: string;
        language: string;
        offerFileName: string;
    }

    export class ContactMessage implements IContactMessage {

        public language: string;
        public offerFileName: string;

        constructor(public name: string,
            public email: string,
            public subject: string,
            public message: string,
            public phone: string) {
        }
    }

}