function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) start = mid + 1;
    if (nums[mid] > target) end = mid - 1;
  }
  return start;
}

searchInsert([1, 3, 5, 6], 5);
