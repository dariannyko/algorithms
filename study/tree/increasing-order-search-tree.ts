class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
