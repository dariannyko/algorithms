function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((num, sum) => num + sum, 0);

  if (sum % 2 !== 0) return false;

  const half = sum / 2;

  const dp = new Array(half + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    if (dp[half - num]) return true;

    for (let i = half - 1; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  return false;
}

canPartition([3, 3, 6, 8, 16, 16, 16, 18, 20]);
// canPartition([1, 5, 11, 5]);
// canPartition([1, 2, 3, 5]);
