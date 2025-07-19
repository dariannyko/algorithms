function findNonMinOrMax(nums: number[]): number {
  let min = Infinity;
  let max = -Infinity;
  for (let num of nums) {
    if (num > max) {
      if (min === Infinity && max !== -Infinity) {
        min = max;
      } else if (max !== -Infinity) return max;
      max = num;
    } else if (num < min) {
      if (min !== Infinity) return min;
      min = num;
    } else {
      return num;
    }
  }
  return -1;
}
