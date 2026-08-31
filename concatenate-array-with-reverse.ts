function concatWithReverse(nums: number[]): number[] {
  const resLength = nums.length * 2;
  const res = new Array(resLength).fill(0);

  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i];
    res[resLength - 1 - i] = nums[i];
  }

  return res;
}

concatWithReverse([1, 2, 3]);
