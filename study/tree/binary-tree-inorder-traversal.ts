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

function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  if (root.left == null && root.right == null) return [root.val];

  let leftValues = inorderTraversal(root.left);
  let rightValues = inorderTraversal(root.right);

  return leftValues.concat([root.val]).concat(rightValues);
}
