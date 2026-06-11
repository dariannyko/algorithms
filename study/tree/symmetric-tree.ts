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
// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root) return true;

//   const stack = [root.left, root.right];

//   while (stack.length > 0) {
//     const right = stack.pop();
//     const left = stack.pop();

//     if (!right && !left) continue;
//     if (!right || !left) return false;
//     if (right.val !== left.val) return false;

//     stack.push(left.left);
//     stack.push(right.right);
//     stack.push(left.right);
//     stack.push(right.left);
//   }
//   return true;
// }

const isMirror = (tree1: TreeNode | null, tree2: TreeNode | null): boolean => {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;
  return (
    tree1.val === tree2.val &&
    isMirror(tree1.left, tree2.right) &&
    isMirror(tree1.right, tree2.left)
  );
};

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  return isMirror(root.left, root.right);
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);
isSymmetric(tree);
