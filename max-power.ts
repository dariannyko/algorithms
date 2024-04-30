function maxPower(s: string): number {
  let current = 1;
  let maxPower = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      current++;
      console.log(current);
    } else {
      maxPower = Math.max(current, maxPower);
      current = 1;
    }
  }

  return Math.max(current, maxPower);
}

// maxPower("abbcccddddeeeeedcba"); // 5
maxPower("leetcode"); // 5
