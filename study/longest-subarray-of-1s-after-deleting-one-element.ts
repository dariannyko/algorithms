// 16

function longestSubarray(nums: number[]): number {
  let begin = 0;
  let windowState = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) windowState++;

    if (windowState > 1) {
      if (nums[begin] === 0) windowState--;
      begin += 1;
    }

    result = Math.max(result, i - begin);
  }

  return result;
}

longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]); // 5
longestSubarray([1, 1, 0, 1]); // 4
