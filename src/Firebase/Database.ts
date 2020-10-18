import { Message } from '../stores/MessagesStore';

export default class Database {
    private db: firebase.database.Database;

    constructor(db: firebase.database.Database) {
      this.db = db;
    }

    chat = () => (prop: keyof Chat, uid?: string) => this.db.ref('chat').child(`${prop}/${uid}`);

    users = (uid?: string) => {
      if (!uid) return this.db.ref('users');
      return this.db.ref('users').child(uid);
    };
}

export interface Chat {
  messages: Message;
  members: any;
  chats: any;
}
