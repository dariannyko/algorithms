function differenceOfSums(n: number, m: number): number {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    res += i % m ? i : -i;
  }
  console.log(res);

  return res;
}

differenceOfSums(10, 3); // 19
