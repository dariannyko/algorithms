function largestLocal(grid: number[][]): number[][] {
  let max = grid[0][0];
  let res: number[][] = [];
  const n = grid[0].length;
  for (let i = 0; i < n - 2; i++) {
    let tempRes = [];
    for (let j = 0; j < n - 2; j++) {
      max = grid[i][j];
      for (let k = i; k <= i + 2; k++) {
        for (let l = j; l <= j + 2; l++) {
          max = grid[k][l] > max ? grid[k][l] : max;
        }
      }
      tempRes.push(max);
    }
    res.push(tempRes);
  }
  return res;
}
