function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  let ind = 0;

  for (let j = 0; j < nums.length; j++) {
    const value = nums[j];

    if (value !== 0) {
      nums[j] = 0;
      nums[ind] = value;
      ind++;
    }
  }

  return nums;
}

applyOperations([1, 2, 2, 1, 1, 0]); // [1,4,2,0,0,0]
