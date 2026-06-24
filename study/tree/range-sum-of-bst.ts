function rangeSumBST(root: TreeNode | null, low: number, high: number) {
  let sum = 0;
  if (root) {
    if (low <= root.val && root.val <= high) sum += root.val;
    if (low <= root.val) sum += rangeSumBST(root.left, low, high);
    if (root.val <= high) sum += rangeSumBST(root.right, low, high);
  }
  return sum;
}
