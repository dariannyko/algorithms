function sortArrayByParity(nums: number[]): number[] {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 === 0) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
  }

  return nums;
}

sortArrayByParity([3, 1, 2, 4]);
