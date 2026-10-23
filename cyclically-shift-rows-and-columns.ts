function cyclicShift(
  n: number,
  grid: number[][],
  rowShift: number[],
  colShift: number[],
): number[][] {
  const result: number[][] = Array.from(
    { length: n },
    () => new Array<number>(n),
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sourceRow = (i + colShift[j]) % n;
      const sourceCol = (j + rowShift[sourceRow]) % n;
      result[i][j] = grid[sourceRow][sourceCol];
    }
  }

  return result;
}
