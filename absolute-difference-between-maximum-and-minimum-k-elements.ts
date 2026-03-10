const absDifference = (nums: number[], k: number) =>
  nums
    .sort((a, b) => a - b)
    .slice(-k)
    .reduce((a, b) => a + b) - nums.slice(0, k).reduce((a, b) => a + b);
