function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map();

  const items = items1.concat(items2);

  for (let set of items) {
    map.set(set[0], (map.get(set[0]) || 0) + set[1]);
  }

  const res: number[][] = [];

  for (let set of map) {
    res.push(set);
  }

  return res.sort((a, b) => a[0] - b[0]);
}

mergeSimilarItems(
  [
    [1, 1],
    [4, 5],
    [3, 8],
  ],
  [
    [3, 1],
    [1, 5],
  ]
); // [[1,6],[3,9],[4,5]]
