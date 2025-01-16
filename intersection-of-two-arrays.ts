function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1);
  const res = new Set<number>();

  for (const num of nums2) if (set.has(num)) res.add(num);

  return Array.from(res);
}

intersection([1, 2, 2, 1], [2, 3, 2]);
