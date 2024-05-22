function maximumUnits(boxTypes: number[][], truckSize: number): number {
  const sortedBoxes = boxTypes.sort((a, b) => b[1] - a[1]);

  let maxUnits = 0;
  let curSize = 0;

  for (let box of sortedBoxes) {
    for (let i = 0; i < box[0]; i++) {
      if (curSize < truckSize) {
        maxUnits += box[1];
        curSize++;
      }
    }
  }

  return maxUnits;
}

maximumUnits(
  [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  10
); // 91
