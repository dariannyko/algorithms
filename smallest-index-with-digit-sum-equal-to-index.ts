function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let divider = nums[i];
    let sum = 0;

    while (divider > 0) {
      const n = divider % 10;
      sum += n;
      divider = Math.floor(divider / 10);
    }

    if (sum === i) return i;
  }

  return -1;
}

smallestIndex([1, 10, 11]); // 1
