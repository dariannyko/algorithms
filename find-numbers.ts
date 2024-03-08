function findNumbers(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i].toString().length % 2)) count++;
  }

  return count;
}

findNumbers([12, 345, 2, 6, 7896]);
