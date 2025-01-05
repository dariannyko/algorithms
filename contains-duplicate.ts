function containsDuplicate(nums: number[]): boolean {
  if (nums.length < 2) return false;

  const set = new Set<number>();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true
