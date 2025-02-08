function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  nums.forEach((value, idx): void => {
    if (idx > 0 && value === nums[idx - 1]) return;
    let left = idx + 1,
      right = nums.length - 1;

    while (left < right) {
      let sum = value + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([value, nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      }
    }
  });
  return res;
}
