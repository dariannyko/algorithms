function threeSumClosest(nums: number[], target: number): number {
  let smallestDifference = Infinity;
  let result = Infinity;

  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }

      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
}
