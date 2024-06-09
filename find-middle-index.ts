function findMiddleIndex(nums: number[]): number {
  let totalSum = 0;
  let sum = 0;

  for (let num of nums) {
    totalSum += num;
  }

  console.log(totalSum);

  for (let i = 0; i < nums.length; i++) {
    if (sum === totalSum - nums[i] - sum) return i;
    sum += nums[i];
  }

  return -1;
}

console.log(findMiddleIndex([2, 3, -1, 8, 4]));
