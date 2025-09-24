// #7
function removeDuplicates(nums: number[]): number {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[pos] !== nums[i]) {
      pos++;
      nums[pos] = nums[i];
    }
  }

  return pos + 1;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // 5
