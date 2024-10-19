function shuffle(nums: number[], n: number): number[] {
  const res: number[] = [];

  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i]);
  }
  return res;
}

shuffle([2, 5, 1, 3, 4, 7], 3); // [2,3,5,4,1,7]
