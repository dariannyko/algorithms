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

function getMinimumDifference(root: TreeNode | null): number {
  const treeArr: number[] = [];
  let minDiff = Infinity;

  function dfs(node: TreeNode | null) {
    if (node === null) return;

    dfs(node.left);
    treeArr.push(node.val);
    dfs(node.right);
  }
  dfs(root);

  for (let i = 1; i < treeArr.length; i++) {
    minDiff = Math.min(minDiff, treeArr[i] - treeArr[i - 1]);
  }

  return minDiff;
}

const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6)
);

getMinimumDifference(tree); // 1
