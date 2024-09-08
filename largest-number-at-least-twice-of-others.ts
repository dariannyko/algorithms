function dominantIndex(nums: number[]): number {
  const max = Math.max(...nums);
  let maxInd = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max === nums[i]) {
      maxInd = i;
      continue;
    }

    if (max / 2 < nums[i]) return -1;
  }

  return maxInd;
}

dominantIndex([3, 6, 1, 0]); // 1
