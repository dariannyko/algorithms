function totalNumbers(digits: number[]): number {
  const unique = new Set<number>();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) {
      continue;
    }

    for (let j = 0; j < digits.length; j++) {
      if (j === i) {
        continue;
      }

      for (let k = 0; k < digits.length; k++) {
        if (k === i || k === j) {
          continue;
        }

        const num = digits[i] * 100 + digits[j] * 10 + digits[k];

        if (num % 2 === 0) {
          unique.add(num);
        }
      }
    }
  }

  return unique.size;
}
