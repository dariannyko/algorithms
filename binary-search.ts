function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const startNum = nums[start];
    const endNum = nums[end];

    if (startNum === target) return start;
    if (endNum === target) return end;
    start++;
    end--;
  }

  return -1;
}
