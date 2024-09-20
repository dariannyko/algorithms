function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let step = 0;
  const average: number[] = [];

  while (step < nums.length / 2) {
    average.push((nums[step] + nums[nums.length - step - 1]) / 2);

    step++;
  }

  return Math.min(...average);
}

minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]); // 5.5
