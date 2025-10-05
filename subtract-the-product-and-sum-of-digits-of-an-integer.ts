function subtractProductAndSum(n: number): number {
  const digits = n.toString();
  let sum = 0,
    product = 1;
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    sum += digit;
    product *= digit;
  }
  return product - sum;
}
