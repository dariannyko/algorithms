function numIdenticalPairs(nums: number[]): number {
  const map = new Map();
  let pairs = 0;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let quantity of map.values()) {
    pairs += (quantity * (quantity - 1)) / 2;
  }

  return pairs;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3]); // 4
