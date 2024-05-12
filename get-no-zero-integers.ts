function includeZero(n: number) {
  return n.toString().includes("0");
}

function getNoZeroIntegers(n: number): number[] {
  for (let i = 0; i < n; i++) {
    const firstValue = n - i;

    if (!includeZero(i) && !includeZero(firstValue)) {
      return [i, firstValue];
    }
  }

  return [0, 0];
}

getNoZeroIntegers(11); // [ 2, 9 ]
