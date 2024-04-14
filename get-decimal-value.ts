class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getDecimalValue(head: ListNode | null): number {
  let value = "";
  let pos = head;

  while (pos) {
    value += String(pos?.val);
    pos = pos?.next;
  }

  return parseInt(value, 2);
}

const list = new ListNode(1, new ListNode(0, new ListNode(1)));
getDecimalValue(list);
