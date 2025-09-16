// #5
function sortedSquares(nums: number[]): number[] {
  const size = nums.length;
  const res = new Array(size);

  let start = 0;
  let end = nums.length - 1;

  for (let i = size; i >= 0; i--) {
    const startSquare = nums[start] ** 2;
    const endSquare = nums[end] ** 2;

    if (startSquare > endSquare) {
      res[i] = startSquare;
      start++;
    } else {
      res[i] = endSquare;
      end--;
    }
  }
  return res;
}

sortedSquares([-4, -1, 0, 3, 10]);
