function isPossibleToSplit(nums: number[]): boolean {
  const map = new Map();

  for (let num of nums) {
    const value = map.get(num) || 0;

    if (value > 1) return false;
    map.set(num, value + 1);
  }

  return true;
}

isPossibleToSplit([1, 1, 2, 2, 3, 4]);
