// Definition for a binary tree node.
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

function rangeSumBST(root: TreeNode | null, low: number, high: number) {
  let sum = 0;
  if (root) {
    if (low <= root.val && root.val <= high) sum += root.val;
    if (low <= root.val) sum += rangeSumBST(root.left, low, high);
    if (root.val <= high) sum += rangeSumBST(root.right, low, high);
  }
  return sum;
}
