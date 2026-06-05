function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  if (root.left == null && root.right == null) return [root.val];

  let leftValues = inorderTraversal(root.left);
  let rightValues = inorderTraversal(root.right);

  return leftValues.concat([root.val]).concat(rightValues);
}
