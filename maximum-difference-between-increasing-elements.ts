function maximumDifference(nums: number[]): number {
  let min = nums[0];
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min) {
      max = Math.max(nums[i] - min, max);
    } else {
      min = nums[i];
    }
  }

  return max;
}

maximumDifference([1, 5, 2, 10]); // 9
maximumDifference([9, 4, 3, 2]); // -1
