function minimumOperations(nums: number[]): number {
  let multipleThree = 0;

  for (let num of nums) if (num % 3) multipleThree++;

  return multipleThree;
}

minimumOperations([1, 2, 3, 4]); // 3
minimumOperations([3, 6, 9]); // 0
