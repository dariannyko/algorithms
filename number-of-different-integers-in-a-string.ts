function numDifferentIntegers(word: string): number {
  return new Set(
    word
      .split(/[^0-9, ]/g)
      .filter(Boolean)
      .map(BigInt)
  ).size;
}
numDifferentIntegers("leet1234code234"); // 2
