function queryResults(limit: number, queries: number[][]): number[] {
  const ballColor = new Map<number, number>();
  const colorCount = new Map<number, number>();

  const result: number[] = [];

  for (const [index, color] of queries) {
    if (ballColor.has(index)) {
      const prevColor = ballColor.get(index)!;
      const count = colorCount.get(prevColor)!;
      if (count === 1) {
        colorCount.delete(prevColor);
      } else {
        colorCount.set(prevColor, count - 1);
      }
    }

    ballColor.set(index, color);
    colorCount.set(color, (colorCount.get(color) || 0) + 1);

    result.push(colorCount.size);
  }

  return result;
}

// queryResults(4, [
//   [1, 4],
//   [2, 5],
//   [1, 3],
//   [3, 4],
// ]);

queryResults(1, [
  [0, 1],
  [1, 4],
  [1, 1],
  [1, 4],
  [1, 1],
]);
// [1, 2, 1, 2, 1];
