function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i.toString(2).replaceAll("0", "").length === k) sum += nums[i];
  }

  return sum;
}

sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1); // 13
