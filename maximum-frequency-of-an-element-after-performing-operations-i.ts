function maxFrequency(
  nums: number[],
  k: number,
  numOperations: number
): number {
  let mx = Math.max(...nums);
  let n = mx + k + 2;
  let f = Array(n).fill(0);

  for (let x of nums) f[x]++;

  let pre = Array(n).fill(0);
  for (let i = 0; i < n; i++) pre[i] = (i > 0 ? pre[i - 1] : 0) + f[i];

  let ans = 0;

  for (let t = 0; t < n; t++) {
    let l = Math.max(0, t - k);
    let r = Math.min(n - 1, t + k);
    let tot = pre[r] - (l > 0 ? pre[l - 1] : 0);
    let canChange = tot - f[t];

    ans = Math.max(ans, f[t], f[t] + Math.min(numOperations, canChange));
  }

  return ans;
}
