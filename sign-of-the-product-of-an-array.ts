function arraySign(nums: number[]): number {
  let res = 1;

  for (let num of nums) {
    if (!num) return 0;
    if (num < 0) {
      res *= -1;
    } else {
      res *= 1;
    }
  }

  return res;
}

arraySign([-1, -2, -3, -4, 3, 2, 1]); // 1
