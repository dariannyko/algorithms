function oddCells(m: number, n: number, indices: number[][]): number {
  let count: number = 0;
  const matrix: number[][] = Array.from({ length: m }, () =>
    new Array(n).fill(0)
  );
  for (let index of indices) {
    let r: number, c: number;
    [r, c] = index;
    for (let i = 0; i < n; i++) {
      matrix[r][i]++;
    }
    for (let i = 0; i < m; i++) {
      matrix[i][c]++;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] % 2 !== 0) count++;
    }
  }

  return count;
}
