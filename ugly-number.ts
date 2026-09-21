function isUgly(n: number): boolean {
  if (n <= 0) return false;

  const primeFactors = [2, 3, 5];

  for (const factor of primeFactors) {
    while (n % factor === 0) n /= factor;
  }

  return n === 1;
}

isUgly(14); // false
