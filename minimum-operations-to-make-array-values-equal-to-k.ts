// TODO: refactor
function minOperations(nums: number[], k: number): number {
  const seen = new Set<number>();
  for (const num of nums) {
    if (num < k) return -1;
    if (num > k) seen.add(num);
  }
  return seen.size;
}
