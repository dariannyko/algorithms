function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let n = nums.length;

  let option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  let option2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(option1, option2);
}
