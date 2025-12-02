// 17
interface Node {
  val: number;
  next: Node | null;
}

class MyLinkedList {
  head: Node;
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

    return node?.val || -1;
  }

  addAtHead(val: number): void {
    const next = this.head;
    this.head = { val, next };
    this.size++;
  }

  addAtTail(val: number): void {
    const node = this.getNode(this.size - 1);

    if (node) node.next = { val, next: null };
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;

    if (index === this.size) {
      this.addAtTail(val);

      return;
    }

    let node = this.getNode(index);
    if (node) node?.next = { val, next: node.next };
  }

  deleteAtIndex(index: number): void {}
}

//  Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
var param_1 = obj.get(1);
obj.addAtHead(val);
obj.addAtTail(val);
obj.addAtIndex(index, val);
obj.deleteAtIndex(index);
