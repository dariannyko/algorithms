function stoneGameII(piles: number[]): number {
  const n = piles.length;
  const suffix: number[] = new Array(n + 1).fill(0);
  const memo: number[][] = Array.from({ length: n }, () =>
    new Array(n + 1).fill(-1),
  );

  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + piles[i];
  }

  function dp(i: number, m: number): number {
    if (i + 2 * m >= n) return suffix[i];
    if (memo[i][m] !== -1) return memo[i][m];

    let opponent = Infinity;

    for (let x = 1; x <= 2 * m; x++) {
      opponent = Math.min(opponent, dp(i + x, Math.max(m, x)));
    }

    memo[i][m] = suffix[i] - opponent;
    return memo[i][m];
  }

  return dp(0, 1);
}
