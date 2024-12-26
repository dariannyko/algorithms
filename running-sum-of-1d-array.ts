function runningSum(nums: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i] + (res[i - 1] || 0));
  }

  return res;
}

runningSum([1, 2, 3, 4]); // [1, 3, 6, 10]
