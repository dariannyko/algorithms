function deleteGreatestValue(grid: number[][]): number {
  const arr: number[][] = [];
  for (let row = 0; row < grid.length; row++) {
    const r: number[] = [...grid[row]];
    r.sort((a, b) => a - b);
    arr.push(r);
  }

  let total: number = 0;
  for (let i = 0; i < grid[0].length; i++) {
    let max: number = 0;
    for (let j = 0; j < arr.length; j++) {
      const maxInRow = arr[j].pop();
      max = Math.max(max, maxInRow);
    }
    total += max;
  }
  return total;
}
