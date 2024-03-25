function findDuplicates(nums: number[]): number[] {
  const map = new Map();
  const res: number[] = [];

  for (let number of nums) {
    if (map.get(number) === 1) res.push(number);
    map.set(number, (map.get(number) || 0) + 1);
  }

  return res;
}

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
