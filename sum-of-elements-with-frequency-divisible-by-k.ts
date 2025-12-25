function sumDivisibleByK(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let sum = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value % k === 0) sum += key * value;
  }

  return sum;
}

// sumDivisibleByK([1, 2, 2, 3, 3, 3, 3, 4], 2);
sumDivisibleByK([4, 4, 4, 1, 2, 3], 3);
