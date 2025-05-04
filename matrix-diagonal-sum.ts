function diagonalSum(mat: number[][]): number {
  let sum = 0;

  for (let i = 0; i < mat.length / 2; i++) {
    const j = mat.length - 1 - i;

    if (i === j) {
      sum += mat[i][j];
    } else {
      sum += mat[i][i] + mat[j][j] + mat[i][j] + mat[j][i];
    }
  }

  return sum;
}

diagonalSum([
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]); // 9
