function increasingBST(root: TreeNode | null): TreeNode | null {
  const dummy = new TreeNode(0);
  let current = dummy;

  function inOrder(node: TreeNode | null): void {
    if (!node) return;

    inOrder(node.left);

    node.left = null;
    current.right = node;
    current = node;

    inOrder(node.right);
  }

  inOrder(root);
  return dummy.right;
}
