function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;
  while (node !== null) {
    if (node.next !== null) {
      if (node.val === node.next.val) {
        node.next = node.next.next;
        continue;
      }
    }
    node = node.next;
  }
  return head;
}
