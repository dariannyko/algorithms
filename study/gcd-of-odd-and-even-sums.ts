function gcdOfOddEvenSums(n: number): number {
  const sumOdd = n * n;
  const sumEven = n * (n + 1);

  return getGCD(sumEven, sumOdd);
}

function getGCD(a: number, b: number): number {
  let gcd = Math.floor(Math.min(a, b) / 2) + 1;

  for (let i = gcd; i > 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 1;
}
