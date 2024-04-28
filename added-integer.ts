function addedInteger(nums1: number[], nums2: number[]): number {
  const sorted1 = nums1.sort((a, b) => a - b);
  const sorted2 = nums2.sort((a, b) => a - b);

  return sorted2[0] - sorted1[0];
}
addedInteger([2, 6, 4], [9, 7, 5]);
