function isArraySpecial(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    const remainder1 = nums[i - 1] % 2;
    const remainder2 = nums[i] % 2;

    if (remainder1 === remainder2) return false;
  }

  return true;
}

isArraySpecial([2, 1, 4]); // true
