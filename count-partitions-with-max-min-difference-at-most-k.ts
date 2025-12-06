function countPartitions(nums: number[], k: number): number {
  const MOD = 1000000007;
  let n = nums.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  let maxq: number[] = [],
    minq: number[] = [];
  let left = 0;
  let total = 0;

  for (let i = 0; i < n; i++) {
    while (maxq.length > 0 && nums[maxq[maxq.length - 1]] <= nums[i]) {
      maxq.pop();
    }

    while (minq.length > 0 && nums[minq[minq.length - 1]] >= nums[i]) {
      minq.pop();
    }
    maxq.push(i);
    minq.push(i);

    while (nums[maxq[0]] - nums[minq[0]] > k) {
      if (maxq[0] === left) maxq.shift();
      if (minq[0] === left) minq.shift();
      total = (total - dp[left] + MOD) % MOD;
      left++;
    }

    total = (total + dp[i]) % MOD;
    dp[i + 1] = total;
  }

  return dp[n];
}
