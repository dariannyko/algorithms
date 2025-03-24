function spiralOrder(matrix: number[][]): number[] {
  const order: number[] = [];

  while (matrix.length && matrix[0][0] !== undefined) {
    order.push(...matrix.shift());
    matrix.forEach((row) => order.push(row.pop()));
    matrix.reverse().map((row) => row.reverse());
  }

  return order;
}

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]); // [1,2,3,4,8,12,11,10,9,5,6,7]
spiralOrder([[7], [9], [6]]); // [7, 9, 6]
