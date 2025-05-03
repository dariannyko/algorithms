function findClosest(x: number, y: number, z: number): number {
  const diffX = Math.abs(z - x);
  const diffY = Math.abs(z - y);

  if (diffX === diffY) return 0;

  return diffX < diffY ? 1 : 2;
}

findClosest(2, 7, 4); // 1
