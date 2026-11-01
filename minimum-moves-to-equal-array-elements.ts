function minMoves(nums: number[]): number {
  let steps = 0;
  const min = Math.min(...nums);

  for (let num of nums) {
    steps += num - min;
  }

  return steps;
}
