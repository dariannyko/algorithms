function sumFourDivisors(nums: number[]): number {
  const divSumFour = (n: number): number => {
    let sum = 0,
      cnt = 0;
    for (let i = 1; i * i <= n; i++) {
      if (n % i !== 0) continue;
      cnt++;
      sum += i;
      const other = Math.floor(n / i);
      if (other !== i) {
        cnt++;
        sum += other;
      }

      if (cnt > 4) return 0;
    }
    return cnt === 4 ? sum : 0;
  };

  let res = 0;
  for (const n of nums) {
    res += divSumFour(n);
  }
  return res;
}
