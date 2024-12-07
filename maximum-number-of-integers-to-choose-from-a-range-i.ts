function maxCount(banned: number[], n: number, maxSum: number): number {
  const bannedNums = new Set(banned);

  let sum = 0;
  let max = 0;

  for (let i = 1; i <= n; i++) {
    const currentSum = sum + i;

    if (!bannedNums.has(i) && currentSum <= maxSum) {
      max++;
      sum = currentSum;
    }
  }

  return max;
}

maxCount([1, 6, 5], 5, 6); // 2
