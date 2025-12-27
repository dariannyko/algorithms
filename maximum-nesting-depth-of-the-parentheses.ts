function maxDepth(s: string) {
  let depth = 0,
    res = 0;
  for (const c of s) {
    depth += +(c === "(") - +(c === ")");
    res = Math.max(res, depth);
  }
  return res;
}
