function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let maxSum = 0;

  for (let i = 0; i < nums.length / 2; i++) {
    const sum = nums[i] + nums[nums.length - i - 1];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

minPairSum([3, 5, 2, 3]); // 7
