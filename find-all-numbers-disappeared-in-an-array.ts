function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const res: number[] = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) res.push(i);
  }

  return res;
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); // [5, 6]
