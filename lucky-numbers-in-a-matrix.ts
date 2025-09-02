function luckyNumbers(matrix: number[][]): number[] {
  const columnsMax: number[] = matrix[0].map((_, ind) =>
    Math.max(...matrix.map((row) => row[ind]))
  );
  const rowsMin: number[] = matrix.map((row) => Math.min(...row));
  return rowsMin.filter((item) => columnsMax.includes(item));
}
