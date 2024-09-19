function mostFrequentEven(nums: number[]): number {
  const map = new Map();
  nums.forEach((number) => {
    if (number % 2 === 0) map.set(number, (map.get(number) ?? 0) + 1);
  });

  const sorted = Array.from(map.keys()).sort((a, b) =>
    map.get(b) === map.get(a) ? a - b : map.get(b) - map.get(a)
  );

  return sorted[0] ?? -1;
}
