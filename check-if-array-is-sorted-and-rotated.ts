function check(nums: number[]): boolean {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]) c++;
    if (c > 1) return false;
  }

  if (c === 0) return true;
  return nums[0] >= nums.at(-1);
}

check([2, 1, 3, 4]); // false
