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
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const stack = [root.left, root.right];

  while (stack.length > 0) {
    const right = stack.pop();
    const left = stack.pop();

    if (!right && !left) continue;
    if (!right || !left) return false;
    if (right.val !== left.val) return false;

    stack.push(left.left);
    stack.push(right.right);
    stack.push(left.right);
    stack.push(right.left);
  }
  return true;
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);

isSymmetric(tree);
