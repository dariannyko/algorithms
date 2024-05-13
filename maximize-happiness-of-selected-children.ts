function maximumHappinessSum(happiness: number[], k: number): number {
  const sorted = happiness.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < k; i++) {
    const child = Math.max(sorted[i] - i, 0);
    if (!child) return sum;
    sum += child;
  }

  return sum;
}

maximumHappinessSum([1, 2, 3], 2); // 4
