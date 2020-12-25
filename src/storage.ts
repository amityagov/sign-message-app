import localforage from 'localforage';

export type KeyStorage = {
};

export class LocalStorageKeyStorage implements KeyStorage {
  storage: typeof localforage;

  constructor() {
    this.storage = localforage.createInstance({
      driver: localforage.LOCALSTORAGE,
      name: 'sign-message.app',
      storeName: 'keys'
    });
  }
}
