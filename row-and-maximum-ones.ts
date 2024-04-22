function rowAndMaximumOnes(mat: number[][]): number[] {
  let row = 0;
  let maxCount = 0;

  for (let i = 0; i < mat.length; i++) {
    const onesCount = mat[i].reduce((sum, cur) => (sum += cur));

    if (onesCount > maxCount) {
      row = i;
      maxCount = onesCount;
    }
  }

  return [row, maxCount];
}

rowAndMaximumOnes([
  [0, 0],
  [1, 1],
  [0, 0],
]); // [1, 2]
