/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumRootToLeaf(root: TreeNode | null): number {
  if (!root) return 0;

  let count = 0;

  let recursive = (node: TreeNode, currStr: string) => {
    if (!node.left && !node.right) {
      currStr += node.val;

      count += parseInt(currStr, 2);
    }

    if (node.left) {
      recursive(node.left, currStr + node.val);
    }

    if (node.right) {
      recursive(node.right, currStr + node.val);
    }
  };

  recursive(root, "");

  return count;
}
