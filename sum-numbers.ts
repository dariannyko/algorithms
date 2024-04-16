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

function sumNumbers(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, sum) {
    if (node?.val) {
      sum = sum * 10 + node?.val;
    }

    if (!node?.left && !node?.right) return sum;

    return dfs(node.left, sum) + dfs(node.right, sum);
  }

  return dfs(root, 0);
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sumNumbers(tree)); // 25
