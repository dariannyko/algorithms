function createGrid(m: number, n: number): string[] {
  const grid: string[] = [];

  for (let i = 0; i < m; ++i) {
    let row = "";

    for (let j = 0; j < n; ++j) {
      if (i === 0 || j === n - 1) {
        row += ".";
      } else {
        row += "#";
      }
    }

    grid.push(row);
  }

  return grid;
}
