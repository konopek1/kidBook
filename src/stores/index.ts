import SessionStore from './SessionStore';

export class RootStore {
    public sessionStore: SessionStore;

    constructor() {
      this.sessionStore = new SessionStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
