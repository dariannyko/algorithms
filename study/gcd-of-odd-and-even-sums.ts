function gcdOfOddEvenSums(n: number): number {
  let sumEven = n * (n + 1);
  let sumOdd = n * n;
  while (sumEven != sumOdd) {
    if (sumEven > sumOdd) sumEven -= sumOdd;
    else sumOdd -= sumEven;
  }
  return sumEven;
}
