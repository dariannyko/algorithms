// #5
function sortedSquares(nums: number[]): number[] {
  const n = nums.length;

  const res = new Array(nums.length);

  let start = 0;
  let end = n - 1;

  for (let i = n - 1; i >= 0; i--) {
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
