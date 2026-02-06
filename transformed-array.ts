function constructTransformedArray(nums: number[]): number[] {
  const n = nums.length;
  const res = Array(n);
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      res[i] = nums[(i + nums[i]) % n];
    } else if (nums[i] === 0) {
      res[i] = nums[i];
    } else if (nums[i] < 0) {
      res[i] = nums[(((i + nums[i]) % n) + n) % n];
    }
  }
  return res;
}
