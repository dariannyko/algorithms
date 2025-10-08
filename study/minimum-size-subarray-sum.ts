// #13
function minSubArrayLen(target: number, nums: number[]): number {
  let begin = 0;
  let windowState = 0;
  let result = Infinity;

  for (let i = 0; i < nums.length; i++) {
    windowState += nums[i];

    while (windowState >= target) {
      const windowSize = i - begin + 1;
      result = Math.min(result, windowSize);

      windowState -= nums[begin];
      begin++;
    }
  }

  return result === Infinity ? 0 : result;
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]); // 2
