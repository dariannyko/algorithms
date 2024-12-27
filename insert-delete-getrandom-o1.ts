class RandomizedSet {
  storage: Map<number, number>;
  list: number[];

  constructor() {
    this.storage = new Map();
    this.list = [];
  }

  insert(val: number): boolean {
    if (this.storage.has(val)) return false;

    this.list.push(val);
    this.storage.set(val, this.list.length - 1);

    return true;
  }

  remove(val: number): boolean {
    const index = this.storage.get(val);

    if (index !== undefined) {
      this.list[index] = this.list[this.list.length - 1];
      this.list.pop();

      this.storage.delete(val);
      this.storage.set(this.list[index], index);
      return true;
    }
    return false;
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.list.length);
    return this.list[index];
  }
}
