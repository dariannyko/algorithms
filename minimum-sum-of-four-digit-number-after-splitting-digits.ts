const minimumSum = (num: number) =>
  `${num}`
    .split("")
    .sort()
    .reduce((res, num, i) => res + 10 ** +!(i >> 1) * +num, 0);
