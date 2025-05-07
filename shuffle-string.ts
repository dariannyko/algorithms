function restoreString(s: string, indices: number[]): string {
  const n = s.length;
  const ans: string[] = [];

  for (let i = 0; i < n; i++) {
    const idx = indices[i];
    ans[idx] = s[i];
  }

  const str = ans.join("");
  return str;
}
