function findMissingElements(nums: number[]): number[] {
  nums.sort((a, b) => a - b);

  const missing = [];
  for (let i = 0, curNum = nums[0]; i < nums.length; i++) {
    while (curNum !== nums[i]) {
      missing.push(curNum++);
    }

    curNum++;
  }

  return missing;
}

findMissingElements([1, 4, 2, 5]); // [3]
