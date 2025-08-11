function generate(numRows: number): number[][] {
  const triangle: number[][] = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle[i] = row;
  }
  return triangle;
}

generate(5); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
generate(1); // [[1]]
