function productExceptSelf(nums: number[]): number[] {
  const res = new Array(nums.length).fill(1);

  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] *= prefix;
    res[nums.length - 1 - i] *= postfix;

    prefix *= nums[i];
    postfix *= nums[nums.length - 1 - i];
  }

  return res;
}

productExceptSelf([1, 2, 3, 4]); // [24, 12, 8, 6]
