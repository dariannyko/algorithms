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

  getNode(index: number) {
    if (index < 0 || index >= this.size) return null;

    let node = this.head;
    for (let i = 0; i < index; i++) node = node.next;

    return node;
  }

  get(index: number): number {
    const node = this.getNode(index);
    return node ? node.val : -1;
  }

  addAtHead(val: number): void {
    const next = this.head;
    this.head = { val, next };
    this.size++;
  }

  addAtTail(val: number): void {
    if (this.size === 0) {
      this.addAtHead(val);
      return;
    }

    const node = this.getNode(this.size - 1);
    if (node) {
      node.next = { val, next: null };
      this.size++;
    }
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

    let node = this.getNode(index - 1);
    if (node) {
      node.next = { val, next: node.next };
      this.size++;
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size || this.size === 0) return;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    const node = this.getNode(index - 1);
    if (node) node.next = node?.next?.next || null;
    this.size--;
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
