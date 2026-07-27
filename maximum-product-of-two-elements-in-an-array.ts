function maxProduct(nums: number[]): number {
  let firstMax = 0;
  let secondMax = 0;

  for (const num of nums) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }

  return (firstMax - 1) * (secondMax - 1);
}

maxProduct([1, 5, 4, 5]);
