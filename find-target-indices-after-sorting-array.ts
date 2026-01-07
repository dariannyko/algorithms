function targetIndices(nums: number[], target: number): number[] {
  nums.sort((n1, n2) => n1 - n2);

  const res = [];
  for (let i = 0; i < nums.length && nums[i] <= target; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }

  return res;
}
