const reverseList = (head: ListNode | null) => {
  let prev = null;
  let current = head;

  while (current) {
    const tmp = current.next;
    current.next = prev;

    prev = current;
    current = tmp;
  }

  return prev;
};

const getMiddleNode = (head: ListNode | null) => {
  if (!head?.next) return head;

  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const isPalindrome = (head: ListNode | null) => {
  const middle = getMiddleNode(head);

  let second = reverseList(middle);
  let first = head;

  while (first && second) {
    if (first.val !== second.val) return false;

    first = first.next;
    second = second.next;
  }
  return true;
};
