function isAdjacentDiffAtMostTwo(s: string, maxDiff = 2) {
  const abs = Math.abs,
    n = s.length;
  for (let i = 1; i < n; i++) {
    if (abs(+s[i] - +s[i - 1]) > maxDiff) return false;
  }
  return true;
}
