function spiralOrder(matrix: number[][]): number[] {
  const elementsOrder: number[] = [];
  while (matrix.length > 0 && matrix[0][0] !== undefined) {
    elementsOrder.push(...matrix.shift());
    matrix.forEach((row) => elementsOrder.push(row.pop()));
    matrix.reverse().map((row) => row.reverse());
  }
  return elementsOrder;
}
