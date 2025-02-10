function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const set = new Set(map.values());

  return set.size === map.size;
}

uniqueOccurrences([1, 2, 2, 1, 1, 3]); // true
