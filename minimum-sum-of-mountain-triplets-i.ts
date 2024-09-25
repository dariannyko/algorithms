function minimumSum(nums: number[]): number {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[k] < nums[j]) {
          const sum = nums[i] + nums[j] + nums[k];
          min = Math.min(min, sum);
        }
      }
    }
  }

  return min === Infinity ? -1 : min;
}

minimumSum([8, 6, 1, 5, 3]); // 9
