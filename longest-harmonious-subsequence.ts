function findLHS(nums: number[]): number {
  let result = 0;
  const countMap = new Map<number, number>();

  nums.forEach(num => {
    if (!countMap.has(num)) {
      countMap.set(num, 1);
    } else {
      countMap.set(num, countMap.get(num) + 1);
    }
  })

  for (const num of countMap.keys()) {
    if (!countMap.has(num + 1)) continue;

    result = Math.max(result, countMap.get(num) + countMap.get(num + 1));
  }

  return result;
};