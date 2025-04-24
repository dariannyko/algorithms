function sumOfMultiples(n: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 7 == 0 || i % 5 == 0) res += i;
  }
  return res;
}

sumOfMultiples(7); // 21
