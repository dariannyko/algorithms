function minNumber(nums1: number[], nums2: number[]): number {
  const set: Set<number> = new Set(nums1);

  let min = Infinity;

  for (let num of nums2) {
    if (set.has(num) && min > num) min = num;
  }

  if (min !== Infinity) return min;

  const min1 = Math.min(...nums1);
  const min2 = Math.min(...nums2);

  return min1 < min2 ? Number(`${min1}${min2}`) : Number(`${min2}${min1}`);
}

minNumber([4, 1, 3], [5, 7]); // 15
