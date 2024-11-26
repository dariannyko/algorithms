function summaryRanges(nums: number[]): string[] {
  let res: string[] = [];
  let start = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    const prev = nums[i - 1];

    if (prev + 1 === nums[i]) continue;

    const s = prev === start ? start.toString() : `${start}->${prev}`;

    res.push(s);
    start = nums[i];
  }

  return res;
}

summaryRanges([0, 1, 2, 4, 5, 7]); // ["0->2","4->5","7"]
