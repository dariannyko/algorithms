function heightChecker(heights: number[]) {
  const sorted = heights.toSorted((a, b) => a - b);
  return heights.reduce((cnt, h, i) => cnt + +(h !== sorted[i]), 0);
}
