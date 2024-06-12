function trimMean(arr: number[]): number {
  const deletingElems = arr.length * 0.05;

  const sliced = arr
    .sort((a, b) => a - b)
    .slice(deletingElems, arr.length - deletingElems);

  const sum = sliced.reduce((acc, curr) => (acc += curr), 0);

  return sum / sliced.length;
}

trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]); // 2
