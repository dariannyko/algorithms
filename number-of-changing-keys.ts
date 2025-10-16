function countKeyChanges(s: string): number {
  let changes = 0;
  s = s.toLowerCase();
  for (let i = 1; i < s.length; i++) {
    if (s[i] != s[i - 1]) changes++;
  }
  return changes;
}
