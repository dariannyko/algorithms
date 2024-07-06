function moveZeroes(nums: number[]): void {
  let curInd = 0;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    nums[i] = 0;
    if (value) {
      nums[curInd] = value;
      curInd++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 13, 0, 0]
