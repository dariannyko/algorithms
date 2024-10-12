function peakIndexInMountainArray(arr: number[]): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] < arr[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return start;
}

peakIndexInMountainArray([0, 2, 1, 0]); // 1
