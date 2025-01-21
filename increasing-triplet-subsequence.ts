function increasingTriplet(nums: number[]): boolean {
  let smaller = Number.MAX_SAFE_INTEGER;
  let bigger = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur <= smaller) {
      smaller = cur;
      continue;
    }
    if (cur <= bigger) {
      bigger = cur;
      continue;
    }
    return true;
  }
  return false;
}
// console.log(increasingTriplet([1, 6, 6, 4, 5]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
