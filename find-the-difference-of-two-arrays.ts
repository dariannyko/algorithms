function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (let num of set1) {
    if (set2.has(num)) {
      set1.delete(num);
      set2.delete(num);
    }
  }
  return [Array.from(set1), Array.from(set2)];
}

findDifference([1, 2, 3], [2, 4, 6]); // [[1,3],[4,6]]
