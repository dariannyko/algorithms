function minimumOperations(nums: number[]): number {
  const set = new Set<number>();

  for (let i = nums.length - 1; i >= 0; i--) {
    if (set.has(nums[i])) {
      return Math.ceil((i + 1) / 3);
    } else {
      set.add(nums[i]);
    }
  }

  return 0;
}

minimumOperations([4, 5, 6, 4, 4]); // 2
