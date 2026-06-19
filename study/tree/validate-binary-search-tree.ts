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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return false;

  const stack: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];

  while (stack.length) {
    const [node, minRange, maxRange] = stack.pop()!;

    if (!node) continue;

    if (node.val <= minRange || node.val >= maxRange) return false;
    
    stack.push([node.left, minRange, node.val]);
    stack.push([node.right, node.val, maxRange]);
  }

  return true;
}
