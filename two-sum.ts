function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const divider = target - nums[i];
    const val = map.get(divider);

    if (val !== undefined) return [val, i];
    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
