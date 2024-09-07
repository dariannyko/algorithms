function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const hash = {};
  const nums = nums1.concat(nums2);

  for (let num of nums) {
    hash[num[0]] = (hash[num[0]] || 0) + num[1];
  }

  const res: number[][] = [];

  for (let key in hash) {
    res.push([key, hash[key]]);
  }

  return res;
}

mergeArrays(
  [
    [1, 2],
    [2, 3],
    [4, 5],
  ],
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ]
); // [[1,6],[2,3],[3,2],[4,6]]
