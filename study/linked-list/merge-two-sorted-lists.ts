class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode();

  let current = dummy;

  let pointer1 = list1;
  let pointer2 = list2;

  while (pointer1 && pointer2) {
    if (pointer1.val < pointer2.val) {
      current.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      current.next = pointer2;
      pointer2 = pointer2.next;
    }

    current = current.next;
  }

  if (pointer1) {
    current.next = pointer1;
  }
  if (pointer2) {
    current.next = pointer2;
  }

  return dummy.next;
}
