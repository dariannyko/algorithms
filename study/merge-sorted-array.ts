// #11
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let ind = n + m - 1;

  while (p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[ind] = nums1[p1];
      p1--;
    } else {
      nums1[ind] = nums2[p2];
      p2--;
    }
    ind--;
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
