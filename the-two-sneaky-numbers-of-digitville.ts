function getSneakyNumbers(nums: number[]): number[] {
  const set = new Set();
  const res: number[] = [];

  for (let num of nums) {
    if (set.has(num)) {
      res.push(num);
    } else {
      set.add(num);
    }
  }

  return res;
}

getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]); // [ 4, 5 ]
