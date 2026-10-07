function minStartValue(nums: number[]): number {
  let minVal: number = 0;
  let total: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    total += nums[i];
    if (total < minVal) {
      minVal = total;
    }
  }

  return -minVal + 1;
}
