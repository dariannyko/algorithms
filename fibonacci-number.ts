function fib(n: number): number {
  if (n === 0 || n === 1) return n;
  const arr: number[] = [0, 1];
  let sum: number = 0;

  for (let i = 1; i < n; i++) {
    sum = arr[i] + arr[i - 1];
    arr.push(sum);
  }

  return sum;
}
