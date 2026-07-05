function countNodes(root: TreeNode | null, count: number = 0): number {
  return root
    ? 1 + countNodes(root.left, count) + countNodes(root.right, count)
    : count;
}
