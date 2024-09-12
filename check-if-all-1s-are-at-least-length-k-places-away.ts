function kLengthApart(nums: number[], k: number): boolean {
  let currentNum = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (currentNum !== -1 && i - currentNum <= k) return false;
      currentNum = i;
    }
  }
  return true;
}
// kLengthApart([0, 1, 0,0, 1, 0, 0, 1], 2);
console.log(kLengthApart([1, 0, 1], 2));
// console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
