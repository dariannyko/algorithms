function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const res: number[] = [];

  for (let num of nums2) {
    if (set1.has(num)) res.push(num);
  }

  for (let num of nums3) {
    if (set1.has(num) || set2.has(num)) res.push(num);
  }

  const resSet = new Set(res);
  return [...resSet];
}

twoOutOfThree([3, 1], [2, 3], [1, 2, 3]);
