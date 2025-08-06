function kWeakestRows(mat: number[][], k: number): number[] {
  let counts = mat.map((x, i) => ({
    index: i,
    count: x.reduce((a, b) => a + b, 0),
  }));
  return counts
    .sort((a, b) => a.count - b.count)
    .slice(0, k)
    .map((x) => x.index);
}
