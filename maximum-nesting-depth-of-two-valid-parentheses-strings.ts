function maxDepthAfterSplit(seq: string): number[] {
  const n: number = seq.length;
  const ans: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = (i & 1) ^ (seq[i] === "(" ? 1 : 0);
  }
  return ans;
}
