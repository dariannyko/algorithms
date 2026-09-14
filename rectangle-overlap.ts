function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const [x1, y1, x2, y2] = rec1;
  const [a1, b1, a2, b2] = rec2;

  const overlapX = Math.max(x1, a1) < Math.min(x2, a2);
  const overlapY = Math.max(y1, b1) < Math.min(y2, b2);

  return overlapX && overlapY;
}
