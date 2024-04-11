function canJump(nums: number[]): boolean {
  let jumps = 0;
  if (nums.length == 1) return true;
  for (let i = 0; i < nums.length; i++) {
    if (i > jumps) return false;

    jumps = Math.max(jumps, nums[i] + i);

    if (jumps >= nums.length - 1) return true;
  }

  return false;
}

canJump([1, 0, 2]); // false
canJump([2, 3, 1, 1, 4]); // true
canJump([2, 0, 0]); // true
