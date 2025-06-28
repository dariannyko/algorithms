function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter((a) => word.includes(a)).length;
}
