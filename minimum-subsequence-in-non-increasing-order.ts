function minSubsequence(nums: number[]): number[] {
  const sum = nums.reduce((prev, value) => prev + value, 0) / 2;
  nums.sort((a, b) => b - a);

  let subSum = 0;
  const res: number[] = [];

  for (const num of nums) {
    subSum += num;
    res.push(num);

    if (subSum > sum) return res;
  }
}

minSubsequence([4, 3, 10, 9, 8]); // [10,9]
