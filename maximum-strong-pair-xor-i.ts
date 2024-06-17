function maximumStrongPairXor(nums: number[]): number {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        const candidate = nums[i] ^ nums[j];

        max = Math.max(candidate, max);
      }
    }
  }

  return max;
}

maximumStrongPairXor([1, 2, 3, 4, 5]);
