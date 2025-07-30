function maxSum(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const max = Math.max(...nums);

  if (max < 0) return max;

  const set = new Set(nums);

  return Array.from(set).reduce((sum, curr) => {
    if (curr > 0) return sum + curr;
    return sum;
  }, 0);
}
