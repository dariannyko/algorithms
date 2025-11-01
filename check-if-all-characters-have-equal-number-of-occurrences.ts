function areOccurrencesEqual(s: string): boolean {
  const counts: Map<string, number> = new Map();

  for (const char of s) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  const frequencies: Set<number> = new Set(counts.values());
  return frequencies.size === 1;
}
