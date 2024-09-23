function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);

  const res: number[][] = [];
  let minDiff = Infinity;

  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (arr[i] - arr[i - 1] < minDiff) {
      minDiff = diff;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const curr = arr[i];
    if (curr - prev === minDiff) {
      res.push([prev, curr]);
    }
  }

  return res;
}

minimumAbsDifference([4, 2, 1, 3]);
minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]);
