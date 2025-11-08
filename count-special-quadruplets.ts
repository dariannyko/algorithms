function countQuadruplets(nums: number[]): number {
  let count = 0;
  for (let r = 3; r < nums.length; r++) {
    for (let i = 0; i < r - 2; i++) {
      for (let j = i + 1; j < r - 1; j++) {
        for (let k = j + 1; k < r; k++) {
          if (nums[i] + nums[j] + nums[k] == nums[r]) count++;
        }
      }
    }
  }
  return count;
}
