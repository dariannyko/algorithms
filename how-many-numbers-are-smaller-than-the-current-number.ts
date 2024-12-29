function smallerNumbersThanCurrent(nums: number[]): number[] {
  const map = new Map<number, number>();

  const sorted = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) map.set(sorted[i], i);
  }

  const res = nums.map((num) => map.get(num) || 0);

  return res;
}

smallerNumbersThanCurrent([8, 1, 2, 2, 3]); // [4, 0, 1, 1, 3]
