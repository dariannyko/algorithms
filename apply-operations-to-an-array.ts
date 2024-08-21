function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  let ind = -1;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0 && ind === -1) {
      ind = j;
    }
    if (nums[j] !== 0 && ind !== -1) {
      nums[ind] = nums[j];
      nums[j] = 0;
      j = ind;
      ind = -1;
    }
  }

  return nums;
}

applyOperations([1, 2, 2, 1, 1, 0]); // [1,4,2,0,0,0]
