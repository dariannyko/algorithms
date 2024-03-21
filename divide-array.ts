function divideArray(nums: number[]): boolean {
  const map = new Map();

  nums.forEach((item) => map.set(item, (map.get(item) || 0) + 1));

  for (let count of map.values()) {
    if (count % 2) return false;
  }

  return true;
}

divideArray([3, 2, 3, 2, 2, 2]);
