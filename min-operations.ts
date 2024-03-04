function minOperations(nums: number[], k: number): number {
  let operations = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) operations++;
  }
  return operations;
}

minOperations([2, 11, 10, 1, 3], 10);
minOperations([1, 1, 2, 4, 9], 9);
