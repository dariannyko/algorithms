function pivotIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.reduce((prev, curr) => prev + curr);

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }

  return -1;
}

pivotIndex([1, 7, 3, 6, 5, 6]);
