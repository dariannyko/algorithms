function rearrangeArray(nums: number[]): number[] {
  const freq = new Map();

  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  const sorted = [...freq].sort((a, b) => a[0] - b[0]);
  const rounds = [];

  for (const [value, count] of sorted) {
    for (let i = 0; i < count; i += 1) {
      (rounds[i] ??= []).push(value);
    }
  }

  return rounds.flat();
}
