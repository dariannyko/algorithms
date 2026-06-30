//   Definition for a binary tree node.
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

function largestValues(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const q = [root];

  while (q.length) {
    const levelSize = q.length;
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      max = Math.max(max, node?.val || 0);

      if (node?.left) q.push(node?.left);
      if (node?.right) q.push(node?.right);
    }

    res.push(max);
  }

  return res;
}

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15, new TreeNode(1)), new TreeNode(7)),
);
console.log(largestValues(tree)); // [ 3, 20, 15, 1 ]
