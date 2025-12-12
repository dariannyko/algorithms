function numberOfMatches(n: number): number {
  let matches = 0;
  while (n > 1) {
    matches += Math.floor(n / 2);
    n = Math.floor(n / 2) + (n % 2);
  }
  return matches;
}
