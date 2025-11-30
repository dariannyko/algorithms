function minSubarray(nums: number[], p: number): number {
  let total = nums.reduce((a, b) => a + b, 0);
  let target = total % p;
  if (target === 0) return 0;

  const map = new Map<number, number>();
  map.set(0, -1);

  let cur = 0;
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    cur = (cur + nums[i]) % p;
    const need = (cur - target + p) % p;

    if (map.has(need)) {
      res = Math.min(res, i - map.get(need)!);
    }

    map.set(cur, i);
  }

  return res === nums.length ? -1 : res;
}
