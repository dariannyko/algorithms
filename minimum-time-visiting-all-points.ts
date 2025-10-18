function minTimeToVisitAllPoints(points: number[][]): number {
  let total = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const dx = Math.abs(points[i + 1][0] - points[i][0]);
    const dy = Math.abs(points[i + 1][1] - points[i][1]);
    total += Math.max(dx, dy);
  }

  return total;
}
