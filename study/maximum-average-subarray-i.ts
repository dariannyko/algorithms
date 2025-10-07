// #12

function findMaxAverage(nums: number[], k: number): number {
  let begin = 0;

  let windowState = 0;
  let result = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    windowState += nums[i];
    const size = i - begin + 1;

    if (size === k) {
      result = Math.max(result, windowState);
      windowState -= nums[begin];
      begin++;
    }
  }

  return result / k;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4); // 12.75
