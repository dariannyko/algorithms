function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const index = map.get(nums[i]);
    if (index >= 0 && Math.abs(i - index) <= k) return true;
    map.set(nums[i], i);
  }

  return false;
}

containsNearbyDuplicate([1, 2, 3, 1], 3); // true
