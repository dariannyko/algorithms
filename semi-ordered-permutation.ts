function semiOrderedPermutation(nums: number[]): number {
  const minIndex = nums.indexOf(1);
  const maxIndex = nums.indexOf(nums.length);

  return (
    minIndex + (nums.length - 1 - maxIndex) - (minIndex < maxIndex ? 0 : 1)
  );
}
semiOrderedPermutation([4, 1, 2, 3]); // 3


interface Node {
  val: number;
  next: Node | null;
}

class MyLinkedList {
  head: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  getNode(index: number): Node | null {
    if (index < 0 || index >= this.size) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node!.next;
    }
    return node;
  }

  get(index: number): number {
    const node = this.getNode(index);
    return node ? node.val : -1;
  }

  addAtHead(val: number): void {
    this.head = { val, next: this.head };
    this.size++;
  }

  addAtTail(val: number): void {
    if (this.size === 0) {
      this.addAtHead(val);
      return;
    }
    const tail = this.getNode(this.size - 1)!;
    tail.next = { val, next: null };
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    const prev = this.getNode(index - 1)!;
    prev.next = { val, next: prev.next };
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head!.next;
      this.size--;
      return;
    }

    const prev = this.getNode(index - 1)!;
    prev.next = prev.next!.next;
    this.size--;
  }
}
