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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  let n = nums.length;
  if (n > 0) {
    let midIndex = Math.floor(n / 2);
    const left = sortedArrayToBST(nums.slice(0, midIndex));
    const right = sortedArrayToBST(nums.slice(midIndex + 1, n));
    return new TreeNode(nums[midIndex], left, right);
  }
  return null;
}
