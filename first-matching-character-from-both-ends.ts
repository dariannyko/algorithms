function firstMatchingIndex(s: string): number {
  const n = s.length;
  for (let c = 0; c < Math.floor((n + 1) / 2); c++) {
    if (s[c] === s[n - c - 1]) return c;
  }
  return -1;
}
