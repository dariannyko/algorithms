function zeroFilledSubarray(nums: number[]): number {
  let res = 0;
  let count = 0;

  for (let num of nums) {
    if (num === 0) {
      count++;
    } else {
      count = 0;
    }
    res += count;
  }

  return res;
}

zeroFilledSubarray([0, 0, 0, 2, 0, 0]);
