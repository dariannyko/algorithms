function intersection(nums: number[][]): number[] {
  let set: Set<number> = new Set(nums[0]);
  const result: Set<number> = new Set();
  for (let i = 1; i < nums.length; i++) {
    set = new Set(nums[i].filter((num) => set.has(num)));
  }
  return [...set].sort((a, b) => a - b);
}
