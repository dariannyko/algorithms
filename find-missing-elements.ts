function findMissingElements(nums: number[]): number[] {
  let minNum = 101,
    maxNum = 0;

  for (const num of nums) {
    minNum = Math.min(minNum, num);
    maxNum = Math.max(maxNum, num);
  }

  const missingNumbers: number[] = [];
  const existingNumbers = new Set(nums);

  for (let num = minNum; num <= maxNum; num++) {
    if (!existingNumbers.has(num)) missingNumbers.push(num);
  }

  return missingNumbers;
}
