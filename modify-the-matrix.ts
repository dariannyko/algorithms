function modifiedMatrix(matrix: number[][]): number[][] {
  const rows = matrix.length,
    cols = matrix[0].length;
  const maxElemInCol = new Uint8Array(cols);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === -1) {
        if (maxElemInCol[col] === 0) {
          for (let index = 0; index < rows; index++) {
            if (matrix[index][col] > maxElemInCol[col])
              maxElemInCol[col] = matrix[index][col];
          }
        }

        matrix[row][col] = maxElemInCol[col];
      }
    }
  }

  return matrix;
}
