function duplicateNumbersXOR(nums: number[]): number {
  const map = new Map();
  let res = 0;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value === 2) {
      res ^= key;
    }
  }

  return res;
}

duplicateNumbersXOR([1, 2, 2, 1]);
