function missingNumber(nums) {
  const sum = (nums.length * (nums.length + 1)) / 2;
  let curSum = sum;

  for (let i = 0; i < nums.length; i++) {
    curSum -= nums[i];
  }
  return curSum;
}
