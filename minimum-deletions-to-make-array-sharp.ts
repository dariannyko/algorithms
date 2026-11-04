function minDeletions(nums: number[]): number {
  let r = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      r++;
    }
  }
  return r;
}
