// #14

function longestOnes(nums: number[], k: number): number {
  let begin = 0;
  let windowState = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) windowState += 1;

    if (windowState > k) {
      if (nums[begin] === 0) windowState -= 1;
      begin += 1;
    }
    res = Math.max(res, i - begin + 1);
  }

  return res;
}

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2); // 6
longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3); // 10
