function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let a = m - 1;
  let b = n - 1;
  //   let c = n + m;
  for (let i = nums1.length - 1; i >= 0; i--) {
    // console.log(i);
    // console.log(nums1[a], nums2[b]);

    if (nums1[a] > nums2[b]) {
      nums1[i] = nums1[a];
      a--;
    }
    if (nums1[a] < nums2[b]) {
      nums1[i] = nums2[b];
      b--;
    }
    if (nums1[a] === nums2[b]) {
      nums1[i] = nums1[a];
      a--;
    }
  }
  // console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
