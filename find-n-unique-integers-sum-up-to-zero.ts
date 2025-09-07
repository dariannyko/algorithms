function sumZero(n: number): number[] {
  const res = new Array(n).fill(0);

  for (let i = 0; i < Math.floor(n / 2); i++) {
    const k = i + 1;
    res[i] = k;
    res[n - i - 1] = -k;
  }
  return res;
}

sumZero(5); // [-2, -1, 0, 2, 2]
