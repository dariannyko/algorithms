function findLucky(arr: number[]): number {
  const freq = new Map<number, number>();

  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  let maxLucky = -1;

  for (const [num, count] of freq.entries()) {
    if (num === count) {
      maxLucky = Math.max(maxLucky, num);
    }
  }

  return maxLucky;
}
