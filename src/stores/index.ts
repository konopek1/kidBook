import MessagesStore from './MessagesStore';
import SessionStore from './SessionStore';
import UserStore from './UsersStore';

export class RootStore {
    public sessionStore: SessionStore;

    public messagesStore: MessagesStore;

    public userStore: UserStore;

    constructor() {
      this.sessionStore = new SessionStore(this);
      this.messagesStore = new MessagesStore(this);
      this.userStore = new UserStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
