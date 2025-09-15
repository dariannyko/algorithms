// #4
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];

      if (sum === 0) {
        res.push([nums[i], nums[start], nums[end]]);

        while (start < end && nums[start] === nums[start + 1]) start++;
        while (start < end && nums[end] === nums[end - 1]) end--;
      }
      if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }

  return res;
}

threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 0, 0, 0]);
