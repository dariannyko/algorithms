function maxChunksToSorted(arr: number[]): number {
  let res = 0;
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) res++;
  }

  return res;
}

maxChunksToSorted([4, 3, 2, 1, 0]); // 1
maxChunksToSorted([1, 0, 2, 3, 4]); // 4
