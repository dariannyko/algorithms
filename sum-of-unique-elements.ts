function sumOfUnique(nums: number[]): number {
  let map = new Map();
  let res = 0;
  for (let item of nums) {
    if (map.has(item)) {
      let val = map.get(item);
      map.set(item, val + 1);
    } else {
      map.set(item, 1);
    }
  }
  map.forEach((value, key) => {
    if (value === 1) {
      res += Number(key);
    }
  });
  return res;
}
