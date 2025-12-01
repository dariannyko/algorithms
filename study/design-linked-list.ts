// 17
interface Node {
  val: number;
  next: Node;
}

class MyLinkedList {
  head: Node;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

    get(index: number): number {

    }

    addAtHead(val: number): void {
        
    }

    addAtTail(val: number): void {
        
    }

    addAtIndex(index: number, val: number): void {
        
    }

    deleteAtIndex(index: number): void {
        
    }
  }
}

//  Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
var param_1 = obj.get(1);
obj.addAtHead(val);
obj.addAtTail(val);
obj.addAtIndex(index, val);
obj.deleteAtIndex(index);
