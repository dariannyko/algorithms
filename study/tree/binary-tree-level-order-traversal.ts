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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];

  const q = [root];

  while (q.length) {
    const levelSize = q.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      if (node?.val !== null) currentLevel.push(node?.val);

      if (node?.left) q.push(node.left);
      if (node?.right) q.push(node.right);
    }

    res.push(currentLevel);
  }

  return res;
}

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15, new TreeNode(1)), new TreeNode(7)),
);
console.log(levelOrder(tree)); // 4
