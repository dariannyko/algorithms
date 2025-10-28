function countValidSelections(nums: number[]): number {
  let n = nums.length,
    ans = 0;
  let sum = nums.reduce((a, b) => a + b, 0);
  let left = 0,
    right = sum;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (left - right >= 0 && left - right <= 1) ans++;
      if (right - left >= 0 && right - left <= 1) ans++;
    } else {
      left += nums[i];
      right -= nums[i];
    }
  }
  return ans;
}
