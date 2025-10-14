function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  let prev = 0,
    curr = 1;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      curr++;
    } else {
      prev = curr;
      curr = 1;
    }
    if ((curr >= k && prev >= k) || curr === k * 2) return true;
  }
  return false;
}
