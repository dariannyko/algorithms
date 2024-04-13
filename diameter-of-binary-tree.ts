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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let count = 0;

  function dfs(node: TreeNode | null) {
    if (!node) return 0;
    const leftNode = dfs(node?.left);
    const rightNode = dfs(node?.right);

    count = Math.max(count, leftNode + rightNode);
    const length = Math.max(leftNode, rightNode);

    return length + 1;
  }
  dfs(root);
  return count;
}

const test = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(diameterOfBinaryTree(test));
