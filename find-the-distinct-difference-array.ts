function distinctDifferenceArray(nums: number[]): number[] {
  const n = nums.length;
  const suffixCount = new Array<number>(n).fill(0);
  const suffixSet = new Set<number>();

  for (let i = n - 1; i >= 0; i--) {
    suffixCount[i] = suffixSet.size;
    suffixSet.add(nums[i]);
  }

  const prefixSet = new Set<number>();
  const result = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    prefixSet.add(nums[i]);
    result[i] = prefixSet.size - suffixCount[i];
  }

  return result;
}
