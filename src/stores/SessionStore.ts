import {
  observable, action, computed, makeObservable,
} from 'mobx';
import { RootStore } from '.';

export default class SessionStore {
    @observable
    public authUser: firebase.User | null = null;

    public rootStore: RootStore;

    constructor(rootStore: RootStore) {
      makeObservable(this);
      this.rootStore = rootStore;
    }

    @action
    setAuthUser = (authUser: firebase.User | null) => {
      this.authUser = authUser;
    };

    @computed
    get isLoggedIn(): boolean {
      return this.authUser !== null && this.authUser.emailVerified;
    }
}
