import {
  observable, makeObservable, action, computed,
} from 'mobx';
import { RootStore } from '.';

export default class UserStore {
      @observable
      private _users: User[] = [];

      public rootStore: RootStore;

      constructor(rootStore: RootStore) {
        makeObservable(this);
        this.rootStore = rootStore;
      }

      @computed
      public get users() : User[] {
        return this._users;
      }

      @action
      setUsers(users: User[]) {
        this._users = users;
      }
}

export type userStoreInjected = {userStore: UserStore};

export type User = {
    name: string,
    uid: string
};
