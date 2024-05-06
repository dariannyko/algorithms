const primeNumbers = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

function numberOfSetBits(num: number) {
  const binary = num.toString(2);

  let setBits = 0;

  for (let i = 0; i < binary.length; i++) {
    if (Number(binary[i])) setBits++;
  }

  return setBits;
}

function countPrimeSetBits(left: number, right: number): number {
  let count = 0;

  for (let i = left; i <= right; i++) {
    if (primeNumbers.has(numberOfSetBits(i))) count++;
  }

  return count;
}

countPrimeSetBits(6, 10); // 4
