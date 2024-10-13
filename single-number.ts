function singleNumber(nums: number[]): number {
  return nums.reduce((prev, curr) => prev ^ curr, 0);
}

singleNumber([4, 1, 2, 1, 2]); // 4
