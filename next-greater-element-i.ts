function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // decrease stack
  const stack = [];
  const r = {};

  for (let x = nums2.length - 1; x >= 0; x--) {
    const num = nums2[x];

    let last = stack[stack.length - 1];
    while (last !== undefined && last <= num) {
      stack.pop();
      last = stack[stack.length - 1];
    }

    if (!stack.length) {
      r[num] = -1;
    } else {
      r[num] = last;
    }

    stack.push(num);
  }

  return nums1.map((i) => r[i]);
}
