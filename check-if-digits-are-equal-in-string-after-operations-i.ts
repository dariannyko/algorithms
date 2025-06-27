function hasSameDigits(s: string): boolean {
  let digits: number[] = s.split("").map((ch) => parseInt(ch));

  while (digits.length !== 2) {
    let newDigits: number[] = [];
    for (let i = 0; i < digits.length - 1; i++) {
      const digSum = (digits[i] + digits[i + 1]) % 10;
      newDigits.push(digSum);
    }
    digits = newDigits;
  }
  return digits[0] === digits[1];
}
