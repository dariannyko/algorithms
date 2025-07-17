function findChampion(grid: number[][]): number {
  const bestRecord = [0, 0];

  for (let i = 0; i < grid.length; i++) {
    let teamWins = 0;
    for (let j = 0; j < grid[i].length; j++) {
      const team = grid[i];
      const result = team[j];
      if (result === 1) teamWins++;
    }
    if (bestRecord[0] < teamWins) {
      bestRecord[0] = teamWins;
      bestRecord[1] = i;
    }
  }

  return bestRecord[1];
}
