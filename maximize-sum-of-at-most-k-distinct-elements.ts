const maxKDistinct = (nums: number[], k: number): number[] =>
  Array.from(new Set(nums))
    .sort((a, b) => b - a)
    .slice(0, k);
