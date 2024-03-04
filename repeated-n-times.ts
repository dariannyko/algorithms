function repeatedNTimes(nums: number[]) {
  const uniqueElems = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (uniqueElems.has(nums[i])) return nums[i];
    uniqueElems.add(nums[i]);
  }
}
