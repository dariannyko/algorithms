function digitFrequencyScore(n: number): number {
  let res = 0;

  while (n > 0) {
    res += n % 10;
    n = Math.floor(n / 10);
  }

  return res;
}

digitFrequencyScore(122); // 5
