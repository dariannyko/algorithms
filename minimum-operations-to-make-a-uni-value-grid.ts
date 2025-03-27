function minOperations(grid: number[][], x: number): number {
  const flatted = grid.flat();
  flatted.sort((a, b) => a - b);
  const remainder = flatted[0] % x;

  const median = Math.floor(flatted.length / 2);

  for (let num of flatted) {
    if (num % x !== remainder) return -1;
  }

  return flatted.reduce(
    (prev, curr) => prev + Math.abs(curr - flatted[median]) / x,
    0
  );
}

minOperations(
  [
    [2, 4],
    [6, 8],
  ],
  2
); // 4
