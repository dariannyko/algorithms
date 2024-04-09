type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init;

  for (let number of nums) {
    acc = fn(acc, number);
  }

  return acc;
}

reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr * curr;
  },
  100
); // 130
