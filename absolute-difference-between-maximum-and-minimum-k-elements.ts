const absDifference = (nums: number[], k: number) => {
  nums.sort((a, b) => a - b);
  const b = nums.slice(0, k).reduce((curr, sum) => curr + sum, 0);
  const a = nums.slice(nums.length - k).reduce((curr, sum) => curr + sum, 0);

  return a - b;
};

absDifference([5, 2, 2, 4], 2); // 5
