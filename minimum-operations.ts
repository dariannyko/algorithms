function minimumOperations(nums: number[]): number {
  const set = new Set(nums);

  return set.has(0) ? set.size - 1 : set.size;
}

minimumOperations([1, 5, 0, 3, 5]);
