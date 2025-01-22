function increasingTriplet(nums: number[]): boolean {
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    if (num <= first) {
      first = num;
      continue;
    }
    if (num <= second) {
      second = num;
      continue;
    }
    return true;
  }

  return false;
}

increasingTriplet([20, 100, 10, 12, 5, 13]); // true
