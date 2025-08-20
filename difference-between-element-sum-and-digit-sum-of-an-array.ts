function differenceOfSum(nums: number[]): number {
  let totalSum = 0;
  let digitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    totalSum += num;

    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }
  }

  return Math.abs(digitSum - totalSum);
}
