interface SStorage<T> {
  [key: string]: T;
}

abstract class UserStorage<T> {
  public abstract setItem(key: string, value: T): void;
  public abstract getItem(key: string): void;
  public abstract clearItem(key: string): void;
  public abstract clear(): void;
}

class LocalStorage<T> extends UserStorage<T> {
  private storage: SStorage<T> = {};
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
