function minimumCost(nums: number[]): number {
  let x1 = Number.MAX_SAFE_INTEGER;
  let x2 = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    if (x < x1) {
      x2 = x1;
      x1 = x;
    } else if (x < x2) {
      x2 = x;
    }
  }
  return nums[0] + x1 + x2;
}
