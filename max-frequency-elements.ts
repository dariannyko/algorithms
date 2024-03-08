function maxFrequencyElements(nums: number[]): number {
  const map = {};

  let elementsCount = 0;
  let currentMax = 0;

  nums.forEach((item) => {
    const count = (map[item] || 0) + 1;
    if (count > currentMax) currentMax = count;
    map[item] = count;
  });

  for (let key in map) {
    if (map[key] === currentMax) elementsCount += map[key];
  }

  return elementsCount;
}

maxFrequencyElements([1, 2, 2, 3, 1, 4]);
