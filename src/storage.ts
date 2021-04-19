import localforage from 'localforage';
export class LocalStorageKeyStorage {
  storage: typeof localforage;

  constructor(storeName: string) {
    this.storage = localforage.createInstance({
      driver: localforage.LOCALSTORAGE,
      name: 'sign-message.app',
      storeName: storeName
    });
  }

  getItems(): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
      const keys: string[] = [];

      this.storage.keys().then(names => {
        if (names.length == 0) {
          resolve(keys);
          return;
        }

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

  async save(id: string, value: string) {
    await this.storage.setItem(id, value);
  }

  async delete(id: string) {
    await this.storage.removeItem(id);
  }
}

export const LocalStorageKeyStorageInstance = new LocalStorageKeyStorage('keys');

export const LocalStorageKeyStatsStorageInstance = new LocalStorageKeyStorage('keys-stats');
