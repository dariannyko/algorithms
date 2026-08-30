function concatWithReverse(nums: number[]): number[] {
  let results = [];

  let rightPointer = nums.length - 1;

  while (rightPointer >= 0) {
    const num = nums[rightPointer];
    results.push(num);
    rightPointer--;
  }

  return nums.concat(results);
}
