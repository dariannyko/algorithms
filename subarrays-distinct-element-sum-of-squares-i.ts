function sumCounts(nums: number[]): number {
  let ans = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const seen = new Set<number>();

    for (let j = i; j < n; j++) {
      seen.add(nums[j]);
      const distinct = seen.size;
      ans += distinct * distinct;
    }
  }

  return ans;
}
