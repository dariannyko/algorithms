function thirdMax(nums: number[]): number {
  const sorted = Array.from(new Set(nums)).sort((a, b) => b - a);

  return sorted[2] ?? sorted[0];
}

thirdMax([2, 2, 3, 1]); //  1
