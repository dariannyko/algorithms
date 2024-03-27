function getIntersectedValue(nums: number[], unique: Set<number>) {
  let count = 0;

  for (let num of nums) {
    if (unique.has(num)) count++;
  }
  return count;
}

function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const unique1 = new Set(nums1);
  const unique2 = new Set(nums2);

  return [
    getIntersectedValue(nums1, unique2),
    getIntersectedValue(nums2, unique1),
  ];
}

findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]); // [3,4]
