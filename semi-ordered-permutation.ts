function semiOrderedPermutation(nums: number[]): number {
  const minIndex = nums.indexOf(1);
  const maxIndex = nums.indexOf(nums.length);

  return (
    minIndex + (nums.length - 1 - maxIndex) - (minIndex < maxIndex ? 0 : 1)
  );
}
semiOrderedPermutation([4, 1, 2, 3]); // 3
