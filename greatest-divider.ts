var findGCD = function (nums: number[]) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  while (min) {
    const divider = max % min;
    max = min;
    min = divider;
  }
  return max;
};

console.log(findGCD([6, 9, 10]));
