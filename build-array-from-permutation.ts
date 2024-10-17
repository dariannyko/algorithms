function buildArray(nums: number[]): number[] {
  const res: number[] = [];

  for (let num of nums) {
    res.push(nums[num]);
  }
  return res;
}

buildArray([0, 2, 1, 5, 3, 4]); // [0,1,2,4,5,3]
