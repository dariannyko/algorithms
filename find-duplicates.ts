function findDuplicates(nums: number[]): number[] {
  const set = new Set();

  const res = nums.filter((number) => {
    if (set.has(number)) {
      return true;
    } else {
      set.add(number);
    }
  });

  return res;
}

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
