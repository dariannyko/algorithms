function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    }
    digits[i] = 0;
  }

  digits.push(0);
  digits[0] = 1;

  return digits;
}

console.log(plusOne([9, 9])); // [1, 0, 0]
