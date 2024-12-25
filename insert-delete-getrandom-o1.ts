class RandomizedSet {
  storage: Set<number>;
  constructor() {
    this.storage = new Set();
  }

  insert(val: number): boolean {
    const prevSize = this.storage.size;
    this.storage.add(val);
    return prevSize !== this.storage.size;
  }

  remove(val: number): boolean {
    return this.storage.delete(val);
  }

  getRandom(): number {
    const arr = Array.from(this.storage);
    const index = Math.floor(Math.random() * this.storage.size);

    return arr[index];
  }
}
