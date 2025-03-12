function maximumCount(nums: number[]): number {
  let pos = 0;
  let neg = 0;

  for (let num of nums) {
    if (num > 0) pos++;
    if (num < 0) neg++;
  }

  return Math.max(pos, neg);
}

maximumCount([-2, -1, -1, 1, 2, 3]); // 3
