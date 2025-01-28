function countPartitions(nums: number[]): number {
  let right = nums.reduce((prev, curr) => prev + curr, 0);
  let left = 0;
  let res = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];

    if ((left - right) % 2 === 0) res++;
  }

  return res;
}

countPartitions([10, 10, 3, 7, 6]); // 4
