function numberOfPairs(nums: number[]): number[] {
  const map = new Map();
  let pairs = 0;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let value of map.values()) {
    pairs += Math.floor(value / 2);
  }

  return [pairs, nums.length - pairs * 2];
}

numberOfPairs([1, 3, 2, 1, 3, 2, 2]);
