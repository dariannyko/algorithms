function jump(nums: number[]): number {
  let jump = 0;
  let current = 0;
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (i === current) {
      jump++;
      current = max;
    }

    if (current > nums.length - 1) break;
  }
  return jump;
}

jump([2, 3, 0, 1, 4]); // 2
jump([2, 3, 1, 1, 4]); // 2
