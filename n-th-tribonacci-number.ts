function tribonacci(n: number): number {
  if (n <= 1) return n;

  if (n === 2) return 1;

  let trib = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
  }

  return trib[n];
}

console.log(tribonacci(25)); // 1389537
