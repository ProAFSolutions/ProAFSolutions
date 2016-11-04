namespace proafsolutions.chat.services {
  "use strict";

  export interface IChatUser {
      id: Number;
      name: String;
      lastText: String;
      face: String;
  }

  export interface IChatsService {
    all(): Array<IChatUser>;
    remove(chat: IChatUser): void;
    get(chatId: string): Object;
  }

  export class Chats implements IChatsService {
    chats: Array<IChatUser>;
    constructor() {
      this.chats = [{
        id: 0,
        name: "Ben Sparrow",
        lastText: "You on your way?",
        face: "img/ben.png"
      }, {
          id: 1,
          name: "Max Lynx",
          lastText: "Hey, it\"s me",
          face: "img/max.png"
        }, {
          id: 2,
          name: "Adam Bradleyson",
          lastText: "I should buy a boat",
          face: "img/adam.jpg"
        }, {
          id: 3,
          name: "Perry Governor",
          lastText: "Look at my mukluks!",
          face: "img/perry.png"
        }, {
          id: 4,
          name: "Mike Harrington",
          lastText: "This is wicked good ice cream.",
          face: "img/mike.png"
        }];
    }
    all(): Array<IChatUser> {
      return this.chats;
    }
    remove(chat: IChatUser): void {
      this.chats.splice(this.chats.indexOf(chat), 1);
    }
    get(chatId: string): IChatUser {
      for (var i: number = 0; i < this.chats.length; i++) {
        if (this.chats[i].id === parseInt(chatId, 10)) {
          return this.chats[i];
        }
      }
      return null;
    }
  }

  angular.module("proafsolutions").service("Chats", Chats);
}


