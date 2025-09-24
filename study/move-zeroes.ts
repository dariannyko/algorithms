// #8
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const num = nums[pos];

      nums[pos] = nums[i];
      nums[i] = num;

      pos++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]);
