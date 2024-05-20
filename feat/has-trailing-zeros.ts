function hasTrailingZeros(nums: number[]): boolean {
  let count = 0;

  for (let num of nums) {
    if (!(num % 2)) count++;
    if (count > 1) return true;
  }

  return false;
}

hasTrailingZeros([1, 2, 3, 4, 5]); // true
