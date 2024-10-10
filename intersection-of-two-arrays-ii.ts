function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const res: number[] = [];

  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    const value = map.get(num);

    if (value && value > 0) {
      res.push(num);
      map.set(num, value - 1);
    }
  }

  return res;
}

intersect([4, 9, 5], [9, 4, 9, 8, 4]); // [9, 4];
