function minSetSize(arr: number[]): number {
  let minSize = 0;
  let curLength = 0;

  const map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const values = Array.from(map.values()).sort((a, b) => a - b);

  while (curLength < arr.length / 2) {
    curLength += values.pop();
    minSize++;
  }
  return minSize;
}

minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]); // 2
