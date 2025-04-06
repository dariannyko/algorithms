type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) return arr;

  const res = [];

  arr.forEach((item) => {
    if (n > 0 && Array.isArray(item)) {
      res.push(...flat(item, n - 1));
    } else {
      res.push(item);
    }
  });
  return res;
};

flat(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15],
  ],
  2
);
