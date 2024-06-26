function minMoves(nums: number[]): number {
  const min = Math.min(...nums);
  let steps = 0;

  for (let num of nums) {
    console.log(steps);

    steps += num - min;
  }

  return steps;
}

minMoves([1, 2, 3]); // 3
