interface LocalStorageAPI<T> {
  [key: string]: T;
}

abstract class UserStorage<T> {
  public abstract setItem(key: string, value: T): void;
  public abstract getItem(key: string): void;
  public abstract clearItem(key: string): void;
  public abstract clear(): void;
}

class LocalStorage<T> extends UserStorage<T> {
  private storage: LocalStorageAPI<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string) {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const sLS = new LocalStorage<string>();
sLS.setItem("hello", "안녕");
sLS.setItem("nice", "훌륭해");
console.log(sLS.getItem("hello"));
console.log(sLS.getItem("nice"));
sLS.clearItem("hello");
console.log(sLS.getItem("hello"));
console.log(sLS.getItem("nice"));
sLS.clear();
console.log(sLS.getItem("nice"));

interface GeolocationAPI {
  getCurrentPosition(successFn: CallableFunction);
  getCurrentPosition(successFn, errorFn);
  getCurrentPosition(successFn, errorFn, optionsObj);
  watchPosition(success);
  watchPosition(success, error);
  watchPosition(success, error, options);
  clearWatch(id);
}
