function largestPerimeter(nums: number[]): number {
  let d = nums.sort((a, b) => a - b);

  for (let i = d.length - 1; i >= 2; i--) {
    let a = nums[i - 2];
    let b = nums[i - 1];
    let c = nums[i];

    if (b + a > c) {
      return b + c + a;
    }
  }
  return 0;
}
