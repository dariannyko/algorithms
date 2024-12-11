function maximumBeauty(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let length = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] - nums[left] <= 2 * k) {
      length++;
    } else {
      left++;
    }
  }

  return length;
}

maximumBeauty([4, 6, 1, 2], 2); // 3
