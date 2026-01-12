function minTimeToVisitAllPoints(points: number[][]): number {
  let res = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const x = Math.abs(points[i + 1][0] - points[i][0]);
    const y = Math.abs(points[i + 1][1] - points[i][1]);
    res += Math.max(x, y);
  }

  return res;
}

minTimeToVisitAllPoints([
  [1, 1],
  [3, 4],
  [-1, 0],
]); // 7
