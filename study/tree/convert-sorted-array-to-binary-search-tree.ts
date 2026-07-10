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
