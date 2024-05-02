function findMaxK(nums: number[]): number {
  const set = new Set();
  let max = -1;

  for (let num of nums) {
    const absNum = Math.abs(num);

    if (absNum > max) {
      if (set.has(num * -1)) {
        max = absNum;
      } else {
        set.add(num);
      }
    }
  }
  return max;
}

findMaxK([-9, -43, 24, -23, -16, -30, -38, -30]);
