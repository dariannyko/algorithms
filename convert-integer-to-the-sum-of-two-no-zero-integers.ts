function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    if ((n - i).toString().includes("0") || i.toString().includes("0"))
      continue;
    return [i, n - i];
  }
}

console.log(getNoZeroIntegers(11));
console.log(getNoZeroIntegers(1010));
console.log(getNoZeroIntegers(4102));
