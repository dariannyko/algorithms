function binaryGap(n: number): number {
  let count = 1;
  let max = 0;
  let hasPosBit = false;

  while (n) {
    const lastBit = n & 1;

    if (hasPosBit) {
      count = lastBit === 0 ? count + 1 : 1;
      if (max < count) max = count;
    } else {
      hasPosBit = lastBit === 1;
    }

    n >>= 1;
  }

  return max;
}
