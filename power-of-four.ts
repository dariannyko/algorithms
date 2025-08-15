function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;

  const log4 = Math.log(n) / Math.log(4);
  return Number.isInteger(log4);
}

isPowerOfFour(10); // false
isPowerOfFour(16); // true
