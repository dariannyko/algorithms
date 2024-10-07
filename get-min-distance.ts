function getMinDistance(nums: number[], target: number, start: number): number {
  let right, left;
  
  right = left = start;

  while (true) {
    if (nums[right] === target) return right - start;
    if (nums[left] === target) return start - left;

    left--;
    right++;
  }
}

getMinDistance([1, 2, 3, 4, 5], 5, 3); // 1
