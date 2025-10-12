function maxProductDifference(nums: number[]): number {
  let a = nums[0];
  let b = -Infinity;
  let c = nums[0];
  let d = Infinity;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num >= a) {
      b = a;
      a = num;
    }
    if (num < a && num >= b) {
      b = num;
    }
    if (num <= c) {
      d = c;
      c = num;
    }
    if (num > c && num <= d) {
      d = num;
    }
  }

  return a * b - c * d;
}
