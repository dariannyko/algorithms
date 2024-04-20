function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const set = new Set<number>();

  let repeating = 0;

  for (let arr of grid) {
    for (let num of arr) {
      if (set.has(num)) {
        repeating = num;
      } else {
        set.add(num);
      }
    }
  }

  for (let i = 1; i <= set.size + 1; i++) {
    if (!set.has(i)) return [repeating, i];
  }
}

findMissingAndRepeatedValues([
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
]); // [9, 5]
