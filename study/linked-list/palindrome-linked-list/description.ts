const reverseList = (head: ListNode | null) => {
  let previous = null;
  let current = head;

  while (current != null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

const getMiddleNode = (head: ListNode | null) => {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow!.next;
  }
  // when fast make the end, slow is at the middle, cause is going doubly faster
  return slow;
};

const isPalindrome = (head: ListNode | null) => {
  const middleList = getMiddleNode(head);
  let current = head;
  let reverse = reverseList(middleList);

  while (reverse !== null) {
    if (current!.val !== reverse.val) {
      return false;
    }
    reverse = reverse.next;
    current = current!.next;
  }

  return true;
};
