function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const count = new Array(grid.length * grid.length).fill(0);
  const res = new Array(2).fill(0);

  for (let nums of grid) {
    for (let num of nums) {
      count[num - 1] ? (res[0] = num) : count[num - 1]++;
    }
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) res[1] = i + 1;
  }
  return res;
}

findMissingAndRepeatedValues([
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
]); // [9, 5]
