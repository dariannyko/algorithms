function minOperations(nums: number[], k: number): number {
  const set = new Set();
  for (const num of nums) {
    if (num < k) return -1;
    if (num > k) set.add(num);
  }

  return set.size;
}

minOperations([5, 2, 5, 4, 5], 2); // 2
