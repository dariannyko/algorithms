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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (!root.left) return right + 1;
  if (!root.right) return left + 1;

  return Math.min(left, right) + 1;
}

// function minDepth(root: TreeNode | null): number {
//   if (!root) return 0;

//   let stack = [root];
//   let level = 1;

//   while (stack.length > 0) {
//     const newStack = [];
//     while (stack.length > 0) {
//       const node = stack.pop();
//       if (!(node.left || node.right)) return level;
//       if (node.left) newStack.push(node.left);
//       if (node.right) newStack.push(node.right);
//     }

//     stack = newStack;
//     level++;
//   }

//   return level;
// }

// const tree = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15, new TreeNode(1)), new TreeNode(7)),
// );

const tree = new TreeNode(
  2,
  null,
  new TreeNode(
    3,
    null,
    new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))),
  ),
);
minDepth(tree); // 5
