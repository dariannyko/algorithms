function minMaxGame(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(...nums);

  const newNums: number[] = [];

  for (let i = 0; i < nums.length; i += 4) {
    const minValue = Math.min(nums[i], nums[i + 1]);
    const maxValue = Math.max(nums[i + 2], nums[i + 3]);

    newNums.push(minValue, maxValue);
  }
  return minMaxGame(newNums);
}

[1, 3, 5, 2, 4, 8, 2, 2]; // 1
