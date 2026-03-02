class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);

  let current = dummy;

  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;

    first.next = second.next;
    second.next = first;
    current.next = second;

    current = first;
  }

  return dummy.next;
}
