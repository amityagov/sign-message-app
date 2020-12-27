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

  getKeys(): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
      const keys: string[] = [];

      this.storage.keys().then(names => {
        for (let index = 0; index < names.length; index++) {
          const key = names[index];

          this.storage.getItem<string>(key).then((data) => {
            if (data) {
              keys.push(data);
            }

            if (index + 1 === names.length) {
              resolve(keys);
            }
          });
        }
      });
    });
  }

  async saveKey(name: string, value: string) {
    await this.storage.setItem(name, value);
  }
}

export const LocalStorageKeyStorageInstance = new LocalStorageKeyStorage();
