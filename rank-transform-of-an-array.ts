function arrayRankTransform(arr: number[]): number[] {
  const set = new Set(arr);
  const sorted = Array.from(set).sort((a, b) => a - b);
  const map = new Map();

  for (let i = 0; i < sorted.length; i++) {
    map.set(sorted[i], i + 1);
  }

  return arr.map((num) => map.get(num));
}

arrayRankTransform([40, 10, 20, 30]); // [4, 1, 2, 3]
arrayRankTransform([100, 100, 100]); // [1, 1, 1]
