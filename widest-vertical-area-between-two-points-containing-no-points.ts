function maxWidthOfVerticalArea(points: number[][]): number {
  const xPoints = [];
  let max = 0;

  points.forEach(([x, y]) => xPoints.push(x));

  xPoints.sort((a, b) => a - b);

  for (let i = 1; i < xPoints.length; i++) {
    if (xPoints[i] === xPoints[i - 1]) continue;

    max = Math.max(xPoints[i] - xPoints[i - 1], max);
  }
  return max;
}

maxWidthOfVerticalArea([
  [3, 1],
  [9, 0],
  [1, 0],
  [1, 4],
  [5, 3],
  [8, 8],
]); // 3
