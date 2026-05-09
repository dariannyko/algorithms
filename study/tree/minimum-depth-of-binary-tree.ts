function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const left = minDepth(root.left) + 1;
  const right = minDepth(root.right) + 1;

  if (!root.left) return right;
  if (!root.right) return left;

  return Math.min(left, right);
}
