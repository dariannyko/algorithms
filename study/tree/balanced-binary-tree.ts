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
function getHeight(root: TreeNode | null): number {
  if (!root) return 0;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log(isBalanced(tree));
