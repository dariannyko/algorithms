function minimumDifference(nums: number[], k: number): number {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  const n = nums.length;
  let res = Number.POSITIVE_INFINITY;

  for (let i = 0; i <= n - k; i++) {
    const diff = nums[i + k - 1] - nums[i];
    if (diff < res) res = diff;
  }
  return res;
}
