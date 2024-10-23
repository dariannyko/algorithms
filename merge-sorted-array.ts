/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let a = m - 1;
  let b = n - 1;
  let ind = nums1.length - 1;

  while (b >= 0) {
    if (nums1[a] > nums2[b]) {
      nums1[ind] = nums1[a];
      a--;
    } else {
      nums1[ind] = nums2[b];
      b--;
    }
    ind--;
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6];
merge([0], 0, [1], 1); // [1]
