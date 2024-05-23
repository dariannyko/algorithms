function countGoodSubstrings(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    const substr = s.slice(i, i + 3);
    const set = new Set(substr);

    if (set.size === 3) count++;
  }

  return count;
}

countGoodSubstrings("xyzzaz"); // 1
