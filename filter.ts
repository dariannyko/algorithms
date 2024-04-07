type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const res: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) && res.push(arr[i]);
  }

  return res;
}

filter([0, 10, 20, 30], function greaterThan10(n) {
  return n > 10;
});
