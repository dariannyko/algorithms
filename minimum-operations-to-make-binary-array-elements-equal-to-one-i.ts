function minOperations(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] = nums[i + 1] === 0 ? 1 : 0;
      nums[i + 2] = nums[i + 2] === 0 ? 1 : 0;

      count++;
    }
  }

  return nums.at(-1) === 0 || nums.at(-2) === 0 ? -1 : count;
}

minOperations([0, 1, 1, 1, 0, 0]); // 3
minOperations([0, 1, 1, 1]); // -1
