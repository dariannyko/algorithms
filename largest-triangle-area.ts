function largestTriangleArea(points: number[][]): number {
  let n = points.length;
  let maxArea = 0;

  const area = (p1, p2, p3) => {
    return (
      Math.abs(
        p1[0] * (p2[1] - p3[1]) +
          p2[0] * (p3[1] - p1[1]) +
          p3[0] * (p1[1] - p2[1])
      ) / 2
    );
  };
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        maxArea = Math.max(maxArea, area(points[i], points[j], points[k]));
      }
    }
  }
  return maxArea;
}
