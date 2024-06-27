function minMoves(nums: number[]): number {
  const min = Math.min(...nums);
  let steps = 0;

  for (let num of nums) {
    console.log(steps);

    steps += num - min;
  }
  console.log(steps)
  return steps;
}
1 2 3
minMoves([8, 9, 8]); // 3
minMoves([4, 4, 100000000]); // 3