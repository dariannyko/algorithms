function findCenter(edges: number[][]): number {
  let a = edges[0][0];
  let b = edges[0][1];

  if (a === edges[1][0] || a === edges[1][1]) {
    return a;
  }

  return b;
}
