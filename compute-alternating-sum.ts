const alternatingSum = (nums: number[]) =>
  nums.reduce((r, n, i) => r + (i % 2 ? -n : n), 0);
