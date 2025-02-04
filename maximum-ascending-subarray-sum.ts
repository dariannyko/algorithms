function maxAscendingSum(nums: number[]): number {
  let max = 0;
  let count = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      count += nums[i];
    } else {
      count = nums[i];
    }
    max = Math.max(max, count);
  }

  return max;
}

maxAscendingSum([10, 20, 30, 5, 10, 50]); // 65
