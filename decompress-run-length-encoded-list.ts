function decompressRLElist(nums: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    const subArr = new Array(nums[i]).fill(nums[i + 1]);
    res.push(...subArr);
  }
  return res;
}

decompressRLElist([1, 2, 3, 4]);
