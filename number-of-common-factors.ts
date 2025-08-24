function commonFactors(a: number, b: number): number {
  //to get the lowest number
  const min: number = Math.min(a, b);
  let count: number = 0;

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) count++;
  }

  return count;
}
