function sortArrayByParity(nums: number[]): number[] {
  let i = 0;
  let j = nums.length - 1;
  let k = 0;

  while (k <= j) {
    if (nums[k] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      i++;
      k++;
    } else {
      let temp = nums[j];
      nums[j] = nums[k];
      nums[k] = temp;
      j--;
    }
  }

  return nums;
}
