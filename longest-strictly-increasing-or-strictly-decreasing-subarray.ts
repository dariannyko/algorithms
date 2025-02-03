function longestMonotonicSubarray(nums: number[]): number {
  let max = 1;
  let currIncrease = 1;
  let currDecrease = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      currIncrease++;
      currDecrease = 1;
    } else if (nums[i - 1] < nums[i]) {
      currDecrease++;
      currIncrease = 1;
    } else {
      currDecrease = 1;
      currIncrease = 1;
    }

    max = Math.max(currIncrease, currDecrease, max);
  }

  return max;
}

longestMonotonicSubarray([3, 2, 1]); // 3
longestMonotonicSubarray([1, 4, 3, 3, 2]); // 2
