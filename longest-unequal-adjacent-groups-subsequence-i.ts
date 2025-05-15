function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const res: string[] = [];

  res.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    if (groups[i - 1] !== groups[i]) res.push(words[i]);
  }
  return res;
}

getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]); // ["a","b","c"]
