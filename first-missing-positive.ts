function firstMissingPositive(nums: number[]): number {
  const set = new Set(nums);
  
  const length = nums.length + 1;
  for (let i = 1; i < length; i++) {
    if (!set.has(i)) return i;
  }

  return length;
}

firstMissingPositive([1, 2, 0]); // 3
