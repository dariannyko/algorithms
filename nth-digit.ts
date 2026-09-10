function findNthDigit(n: number): number {
  let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  start += (n - 1) / len;

  return Number(start.toString()[(n - 1) % len]);
}
