function isBalanced(num: string): boolean {
  let evenSum: number = 0;
  let oddSum: number = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 == 0) {
      evenSum += +num[i];
    } else {
      oddSum += +num[i];
    }
  }
  return evenSum == oddSum;
}

isBalanced("1234"); // false
