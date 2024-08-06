const addToArrayForm = (num: number[], k: number): number[] => {
  let division = k;
  const res: number[] = [];
  console.log(0);

  for (let i = num.length - 1; i >= 0 || division > 0; i--) {
    if (i >= 0) division += num[i];

    res.push(division % 10);
    division = Math.floor(division / 10);
  }

  return res.reverse();
};

addToArrayForm([1, 2, 0, 0], 34);
addToArrayForm(
  [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
  516
);
