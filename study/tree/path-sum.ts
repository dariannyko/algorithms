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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const stack: [TreeNode, number][] = [[root, 0]];

  while (stack.length) {
    let [node, currentSum] = stack.pop()!;

    if (!node) continue;

    const sum = currentSum + node.val;

    if (!node.left && !node.right && sum === targetSum) return true;
    stack.push([node.left, sum]);
    stack.push([node.right, sum]);
  }

  return false;
}

const tree = new TreeNode(3, new TreeNode(2), new TreeNode(1));
hasPathSum(tree, 5); // true
