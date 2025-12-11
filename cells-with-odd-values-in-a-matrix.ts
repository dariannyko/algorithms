function oddCells(m: number, n: number, indices: number[][]): number {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (let index of indices) {
    const [row, column] = index;

    rows[row]++;
    cols[column]++;
  }

  let count: number = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if ((rows[r] + cols[c]) % 2 === 1) count++;
    }
  }

  return count;
}

oddCells(2, 3, [
  [0, 1],
  [1, 1],
]);
