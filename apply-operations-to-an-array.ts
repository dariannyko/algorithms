function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  let ind = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0 && ind === -1) {
      console.log(ind);
      ind = j;

      //   nums[ind] = nums[j];
      //   ind++;
    }
    console.log(ind);
    if (nums[j] !== 0 && ind !== -1) {
      nums[ind] = nums[j];
      nums[j] = 0;
      j = ind;
      ind = -1;
    }

    // if (nums[j] === 0) {
    //   ind = j;
    // } else {
    //   //   nums[ind] = nums[j];
    // }
  }

  console.log(nums);
}

applyOperations([1, 2, 2, 1, 1, 0]);
