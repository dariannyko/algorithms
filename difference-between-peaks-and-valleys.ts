function peakValleyDifference(nums: number[]): number {
  let peak = 0;
  let vall = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peak += nums[i];
    }

    if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
      vall += nums[i];
    }
  }

  return peak - vall;
}

peakValleyDifference([1, 5, 2, 4, 1, 3, 0]); // 9
