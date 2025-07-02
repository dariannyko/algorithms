function findLHS(nums: number[]): number {
  const map = new Map();
  let res = 0;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of map.keys()) {
    const next = map.get(num + 1);

    if (next === undefined) continue;
    res = Math.max(map.get(num) + next, res);
  }

  return res;
}

findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
