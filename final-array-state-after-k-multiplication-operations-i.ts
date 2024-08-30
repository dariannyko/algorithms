function getFinalState(
  nums: number[],
  k: number,
  multiplier: number
): number[] {
  while (k) {
    let indexMin = 0;
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < min) {
        indexMin = i;
        min = nums[i];
      }
    }
    nums[indexMin] *= multiplier;
    k--;
  }

  return nums;
}
