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

function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  const res: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;

    if (node?.left) dfs(node.left);
    if (node?.right) dfs(node.right);

    if (node?.val !== null) res.push(node.val);
  }

  dfs(root1);
  dfs(root2);

  return res.sort((a, b) => a - b);
}

const test1 = new TreeNode(2, new TreeNode(1), new TreeNode(4));
const test2 = new TreeNode(1, new TreeNode(0), new TreeNode(3));

getAllElements(test1, test2); // [0,1,1,2,3,4]

