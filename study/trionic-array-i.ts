function isTrionic(nums: number[]): boolean {
  if (nums.length < 2) return false;

  let direction = nums[0] < nums[1];
  if (!direction) return false;
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return false;
    const currentDirection = nums[i] < nums[i + 1];
    if (direction !== currentDirection && nums[i + 1]) {
      count++;
      direction = currentDirection;
    }
  }

  return count === 3;
}
