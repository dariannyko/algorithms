function isPowerOfThree(n: number): boolean {
  const pow = Math.floor(Math.log(n) / Math.log(3));
console.log(pow);

  return pow === 3;
}

isPowerOfThree(9); // true
