interface Node {
  key: number;
  value: number;
  next: Node | null;
}

class MyLinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  get(key: number): number {
    let current = this.head;

    while (current !== null) {
      if (current?.key === key) return current.value;

      current = current?.next;
    }

    return -1;
  }

  put(key: number, value: number): void {
    let current = this.head;

    while (current !== null) {
      if (current?.key === key) {
        current.value = value;
        return;
      }

      current = current?.next;
    }

    const node: Node = {
      value,
      key,
      next: this.head,
    };

    this.head = node;
  }

  remove(key: number): void {
    if (this.head === null) return;

    if (this.head.key === key) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current !== null) {
      if (current?.next?.key === key) {
        current.next = current.next.next;
        return;
      }
      current = current?.next;
    }
  }
}

class MyHashMap {
  size: number;
  buckets: MyLinkedList[];

  constructor() {
    this.size = 991;
    this.buckets = Array.from({ length: this.size }, () => new MyLinkedList());
  }

  hash(key: number) {
    return key % this.size;
  }

  put(key: number, value: number): void {
    const n = this.hash(key);
    this.buckets[n].put(key, value);
  }

  get(key: number): number {
    const n = this.hash(key);
    return this.buckets[n].get(key);
  }

  remove(key: number): void {
    const n = this.hash(key);
    return this.buckets[n].remove(key);
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
