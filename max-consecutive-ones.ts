function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let max = 0;

  for (let num of nums) {
    count += num;
    if (!num) count = 0;
    max = Math.max(count, max);
  }

  return max;
}

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
