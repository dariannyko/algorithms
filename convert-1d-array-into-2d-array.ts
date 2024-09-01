function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  const matrixSize = m * n;
  if (original.length !== matrixSize) return [];

  const res: number[][] = [];

  for (let i = 0; i < original.length; i += n) {
    const part = original.slice(i, i + n);
    res.push(part);
  }

  return res;
}

construct2DArray([1, 2, 3], 1, 3); // [[1,2,3]]
construct2DArray([1, 2, 3, 4], 2, 2); // [[1,2],[3,4]]
