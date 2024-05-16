function canBeEqual(target: number[], arr: number[]): boolean {
  if (target.length !== arr.length) return false;

  const map = new Map();

  for (let num of target) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of arr) {
    if (!map.get(num)) return false;

    map.set(num, map.get(num) - 1);
  }

  return true;
}

canBeEqual([1, 1, 2, 3, 4], [2, 4, 1, 3, 5, 1]); // false
