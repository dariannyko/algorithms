function countHillValley(nums: number[]): number {
  let res = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) continue;

    if (
      (nums[i] > nums[left - 1] && nums[i] > nums[i + 1]) ||
      (nums[i] < nums[left - 1] && nums[i] < nums[i + 1])
    ) {
      res++;
    }

    left = i + 1;
  }

  return res;
}

countHillValley([2, 4, 1, 1, 6, 5]); // 3
countHillValley([6, 6, 5, 5, 4, 1]); // 0
