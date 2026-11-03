function minMoves(nums: number[]): number {
  const max = Math.max(...nums);

  let steps = 0;

  for (let num of nums) {
    steps += max - num;
  }

  return steps;
}
minMoves([4, 4, 5]); // 2
minMoves([2, 1, 3]); // 3
