function removeZeros(n: number): number {
  let result = 0;
  let mult = 1;
  while (n > 0) {
    const r = n % 10;
    if (r > 0) {
      result += r * mult;
      mult *= 10;
    }
    n = Math.floor(n / 10);
  }
  return result;
}
