class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function gcd(curr, next) {
  return next == 0 ? curr : gcd(next, curr % next);
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let node = head;

  while (node?.next) {
    const delim = gcd(node.val, node.next.val);
    const newNode = new ListNode(delim, node.next);
    node.next = newNode;
    node = node.next.next;
  }

  return head;
}

const node = new ListNode(
  18,
  new ListNode(6, new ListNode(10, new ListNode(3)))
);

insertGreatestCommonDivisors(node);
