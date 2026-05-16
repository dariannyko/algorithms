function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const sumAlice = aliceSizes.reduce((acc, curr) => acc + curr, 0);
  const sumBob = bobSizes.reduce((acc, curr) => acc + curr, 0);
  const targetDifference = (sumBob - sumAlice) / 2;

  const bobSet = new Set(bobSizes);

  for (const x of aliceSizes) {
    const y = x + targetDifference;
    if (bobSet.has(y)) {
      return [x, y];
    }
  }

  return [];
}
