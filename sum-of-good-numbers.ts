function sumOfGoodNumbers(nums: number[], k: number): number {
  let sum = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let isGood: boolean = true;

    if (i - k >= 0 && nums[i] <= nums[i - k]) {
      isGood = false;
    }

    if (i + k < n && nums[i] <= nums[i + k]) {
      isGood = false;
    }

    if (isGood) {
      sum += nums[i];
    }
  }
  return sum;
}
