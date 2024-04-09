function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const mapped: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    mapped.push(fn(arr[i], i));
  }

  return mapped;
}

map([1, 2, 3], function plusone(n) {
  return n + 1;
});
