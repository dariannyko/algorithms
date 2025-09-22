function maxFrequencyElements(nums: number[]): number {
  const map: Record<string, number> = {};

  let elementsCount = 0;
  let currentMax = 0;

  nums.forEach((item) => (map[item] = (map[item] || 0) + 1));

  for (let key in map) {
    if (map[key] === currentMax) {
      elementsCount += map[key];
    }

    if (map[key] > currentMax) {
      currentMax = map[key];
      elementsCount = map[key];
    }
  }

  return elementsCount;
}
