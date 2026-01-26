// 17
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
  
  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.val;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;

    this.size++;
    let current = this.head;

    if (index === 0) {
      const node = { val, next: current };
      this.head = node;
      return;
    }

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const oldCurrent = current.next;

    current.next = { val, next: oldCurrent };
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;
    this.size--;

    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      return;
    }

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}

//  Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
// var param_1 = obj.get(1);
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
obj.get(1);
obj.deleteAtIndex(0);
obj.get(0);
console.log(obj);
