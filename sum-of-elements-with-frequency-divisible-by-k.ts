function sumDivisibleByK(nums: number[], k: number): number {
  let mymap: Map<number, number> = new Map();
  for (const num of nums) {
    mymap.set(num, (mymap.get(num) | 0) + 1);
  }
  let sum: number = 0;
  mymap.forEach((value, key) => {
    if (value % k == 0) {
      sum += value * key;
    }
  });
  return sum;
}
