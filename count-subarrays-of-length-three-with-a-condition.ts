function countSubarrays(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 2] === nums[i + 1] / 2) res++;
  }
  return res;
}

countSubarrays([1, 2, 1, 4, 1]); // 1
