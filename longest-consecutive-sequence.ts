function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let maxCount = 0;

  for (let num of set) {
    if (set.has(num - 1) === false) {
      let current = num;
      let count = 0;

      while (set.has(current++)) {
        count++;
      }
      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
}

longestConsecutive([100, 101, 4, 200, 1, 3, 2]); // 4
