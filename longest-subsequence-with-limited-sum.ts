function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; ++i) {
    nums[i] += nums[i - 1];
  }

  return queries.map((query) => {
    let left = 0,
      right = nums.length - 1,
      result = 0;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= query) {
        result = mid + 1;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  });
}
