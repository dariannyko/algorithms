class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}

const node4 = new ListNode(-4);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(3, node2);

node4.next = node2;
hasCycle(head); // true
