function hammingDistance(x: number, y: number): number {
  let diff = x ^ y;
  let count = 0;

  while (diff) {
    count += 1;
    diff &= diff - 1;
  }

  return count;
}
