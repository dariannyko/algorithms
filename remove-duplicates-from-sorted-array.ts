function removeDuplicates(nums: number[]): number {
  let position = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      position++;
      nums[position] = nums[i];
    }
  }

  return position + 1;
}

 removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // [0, 1, 2, 3, 4, _, _, _, _, _]
removeDuplicates([1, 1, 2]); // [1, 2, _]
