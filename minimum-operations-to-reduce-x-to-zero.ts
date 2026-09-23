function minOperations(nums: number[], x: number): number {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  const target = totalSum - x;

  if (target < 0) return -1;
  if (target === 0) return nums.length;

  let begin = 0;
  let windowState = 0; // currentSum
  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    windowState += nums[i];

    while (windowState > target) {
      windowState -= nums[begin];
      begin++;
    }

    if (windowState === target) {
      const size = i - begin + 1;

      result = Math.max(result, size);
    }
  }

  return result === -1 ? -1 : nums.length - result;
}

// minOperations([1, 1, 4, 2, 3], 5);
minOperations([3, 2, 20, 1, 1, 3], 10);
