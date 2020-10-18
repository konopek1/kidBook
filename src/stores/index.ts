import MessagesStore from './MessagesStore';
import SessionStore from './SessionStore';

export class RootStore {
    public sessionStore: SessionStore;

    public messagesStore: MessagesStore;

    constructor() {
      this.sessionStore = new SessionStore(this);
      this.messagesStore = new MessagesStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
