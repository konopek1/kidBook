import {
  action,
  computed,
  makeObservable, observable,
} from 'mobx';
import { RootStore } from '.';

export default class MessagesStore {
    private rootStore: RootStore;

    @observable
    private _messages: Array<Message> = [];

    @observable
    private _limit: number = 10;

    constructor(rootStore: RootStore) {
      makeObservable(this);
      this.rootStore = rootStore;
    }

    @computed
    public get messages(): Array<Message> {
      return this._messages;
    }

    @action
    public setMessages(messages: Array<Message>) {
      this._messages = messages;
    }

    @computed
    public get limit(): number {
      return this._limit;
    }

    @action
    public setLimit(limit: number) {
      this._limit = limit;
    }
}

export interface Message {
    author: string;
    content: string;
    timestamp: number;
}

export type messageStoreInjected = {messagesStore: MessagesStore};
