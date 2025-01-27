function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;
  let count = 0;

  while (start < end) {
    if (nums[start] + nums[end] === k) {
      count++;
      start++;
      end--;
    }
    if (nums[start] + nums[end] > k) {
      end--;
    }
    if (nums[start] + nums[end] < k) {
      start++;
    }
  }

  return count;
}

maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2); // 2
