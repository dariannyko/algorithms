function getConcatenation(nums: number[]): number[] {
  const arr = new Array(nums.length * 2);

  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[i];
    arr[i + nums.length] = nums[i];
  }
  return arr;
}
getConcatenation([1, 3, 2, 1]);
