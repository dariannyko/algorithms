function pivotArray(nums: number[], pivot: number): number[] {
  const res: number[] = [];

  for (let num of nums) {
    if (num < pivot) res.push(num);
  }
  for (let num of nums) {
    if (num === pivot) res.push(num);
  }
  for (let num of nums) {
    if (num > pivot) res.push(num);
  }

  return res
}

pivotArray([-3, 4, 3, 2], 2);
// pivotArray([9, 12, 5, 10, 14, 3, 10], 10);
