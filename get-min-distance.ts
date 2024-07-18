function getMinDistance(nums: number[], target: number, start: number): number {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      min = Math.min(min, Math.abs(i - start));
    }
  }

  return min;
}

getMinDistance([1, 2, 3, 4, 5], 5, 3); // 1

