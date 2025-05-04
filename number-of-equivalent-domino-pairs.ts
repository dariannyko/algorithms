const numEquivDominoPairs = (dominoes: number[][]): number => {
  const counts = new Array(100).fill(0);
  let result = 0;

  const n = dominoes.length;
  for (let i = 0; i < n; i++) {
    const key =
      Math.min(dominoes[i][0], dominoes[i][1]) * 10 +
      Math.max(dominoes[i][0], dominoes[i][1]);
    result += counts[key];
    counts[key]++;
  }

  return result;
};
