function sortedSquares(nums: number[]): number[] {
  const res = new Array(nums.length);

  let start = 0;
  let end = nums.length - 1;
  let length = end;

  while (start <= end) {
    const startSquare = nums[start] ** 2;
    const endSquare = nums[end] ** 2;

    if (startSquare > endSquare) {
      res[length] = startSquare;
      start++;
    } else {
      res[length] = endSquare;
      end--;
    }
    length--;
  }
  return res;
}
