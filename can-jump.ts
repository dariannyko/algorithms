function canJump(nums: number[]): boolean {
  let jumps = 0;

  if (nums.length == 1) return true;

  for (let i = 0; i < nums.length; i++) {
    jumps = Math.max(jumps, nums[i]);
    if (!jumps && i < nums.length - 1) return false;
    jumps--;
  }

  return true;
}

canJump([1, 0, 2]); // false
