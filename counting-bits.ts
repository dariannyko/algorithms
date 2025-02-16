function countBits(n: number): number[] {
  const res = new Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    res[i] = i.toString(2).replaceAll("0", "").length;
  }

  return res;
}

countBits(5);
