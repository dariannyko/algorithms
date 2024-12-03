function minChanges(s: string): number {
  let count = 0;

  for (let i = 1; i < s.length; i = i + 2) {
    if (s[i - 1] !== s[i]) count++;
  }

  return count;
}

minChanges("1001"); // 2
