function smallestEqual(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) return i;
  }
  return -1;
}

console.log(
  smallestEqual([
    7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6,
  ]) // 21
);
console.log(smallestEqual([0, 1, 2])); // 0
