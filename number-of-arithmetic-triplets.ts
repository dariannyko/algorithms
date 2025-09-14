function arithmeticTriplets(nums: number[], diff: number): number {
  const set = new Set(nums);
  let count = 0;

  for (const num of nums) {
    if (set.has(num + diff) && set.has(num + 2 * diff)) {
      count++;
    }
  }

  return count;
}
