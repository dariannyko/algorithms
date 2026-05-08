//  Definition for a binary tree node.
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

// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;

//   const left = maxDepth(root.left);
//   const right = maxDepth(root.right);

//   return Math.max(left, right) + 1;
// }

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const stack: [TreeNode, number][] = [[root, 1]];
  let res = 0;

  while (stack.length) {
    const [node, depth] = stack.pop()!;

    if (!node) continue;
    res = Math.max(res, depth);

    stack.push([node.left, depth + 1]);
    stack.push([node.right, depth + 1]);
  }
  return res;
}

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15, new TreeNode(1)), new TreeNode(7)),
);
maxDepth(tree); // 4
