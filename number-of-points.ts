function numberOfPoints(nums: number[][]): number {
  const set: Set<number> = new Set();

  nums.forEach((item) => {
    for (let i = item[0]; i <= item[1]; i++) {
      set.add(i);
    }
  });

  return set.size;
}

numberOfPoints([
  [3, 6],
  [1, 5],
  [4, 7],
]);
