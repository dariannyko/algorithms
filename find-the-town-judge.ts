function findJudge(n: number, trust: number[][]): number {
  const trustedBy: number[] = Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    trustedBy[a] = NaN;
    trustedBy[b]++;
  }
  return trustedBy.indexOf(n - 1) || 1;
}
