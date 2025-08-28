function countPrefixes(words: string[], s: string): number {
  const wLen = words.length;
  let count = 0;

  for (let i = 0; i < wLen; i++) {
    if (s.startsWith(words[i])) {
      count++;
    }
  }

  return count;
}
