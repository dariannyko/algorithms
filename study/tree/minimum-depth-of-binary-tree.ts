// function minDepth(root: TreeNode | null): number {
//   if (root === null) return 0;

//   const left = minDepth(root.left) + 1;
//   const right = minDepth(root.right) + 1;

//   if (!root.left) return right;
//   if (!root.right) return left;

//   return Math.min(left, right);
// }

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let stack = [root];
  let level = 1;

  while (stack.length > 0) {
    const newStack = [];
    while (stack.length > 0) {
      const node = stack.pop();
      if (!(node.left || node.right)) return level;
      if (node.left) newStack.push(node.left);
      if (node.right) newStack.push(node.right);
    }

    stack = newStack;
    level++;
  }

  return level;
}
