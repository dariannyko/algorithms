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
// function isValidBST(root: TreeNode | null): boolean {
//   if (!root) return false;

//   const stack: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];

//   while (stack.length) {
//     const [node, minRange, maxRange] = stack.pop()!;

//     if (!node) continue;

//     if (node.val <= minRange || node.val >= maxRange) return false;

//     stack.push([node.left, minRange, node.val]);
//     stack.push([node.right, node.val, maxRange]);
//   }

//   return true;
// }

function validate(root: TreeNode | null, min: number, max: number): boolean {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  const left = validate(root.left, min, root.val);
  const right = validate(root.right, root.val, max);

  return left && right;
}

function isValidBST(root: TreeNode | null): boolean {
  return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
