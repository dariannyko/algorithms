function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let triplets = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        )
          triplets++;
      }
    }
  }
  return triplets;
}

countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3); // 4
