function buildArray(nums: number[]): number[] {
  return nums.map((v) => nums[v]);
}

buildArray([0, 2, 1, 5, 3, 4]); // [0,1,2,4,5,3]
