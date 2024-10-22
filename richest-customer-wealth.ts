function maximumWealth(accounts: number[][]): number {
  const wealth = accounts.map((account) =>
    account.reduce((prev, curr) => prev + curr, 0)
  );

  return Math.max(...wealth);
}

maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]); // 17
