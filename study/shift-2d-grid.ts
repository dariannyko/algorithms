function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length,
    n = grid[0].length,
    total = m * n;
  k = k % total;
  const flat = grid.flat();
  const shifted = flat.slice(-k).concat(flat.slice(0, flat.length - k));
  const result: number[][] = [];
  for (let i = 0; i < m; i++) result.push(shifted.slice(i * n, (i + 1) * n));
  return result;
}
