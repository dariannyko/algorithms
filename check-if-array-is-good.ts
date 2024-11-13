const isGood = (nums: number[]): boolean => {
  const sorted = nums.sort((a, b) => a - b);

  if (sorted.at(-1) !== sorted.at(-2)) return false;

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] !== i + 1) return false;
  }

  return true;
};

console.log(isGood([1, 2, 3])); // false
