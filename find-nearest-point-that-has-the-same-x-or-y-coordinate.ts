function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let smallDistance = Number.MAX_SAFE_INTEGER;
  let smallIndex = -1;

  for (let i = 0; i < points.length; i++) {
    const distance = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);

    if (
      (points[i][0] === x || points[i][1] === y) &&
      distance < smallDistance
    ) {
      smallDistance = distance;
      smallIndex = i;
    }
  }
  return smallIndex;
}
