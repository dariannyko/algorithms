function countConsistentStrings(allowed: string, words: string[]): number {
  const set = new Set();
  let count = 0;

  for (const char of allowed) {
    set.add(char);
  }

  words.forEach((word) => {
    for (const char of word) {
      if (!set.has(char)) return false;
    }
    count++;
  });

  return count;
}

countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]); // 2
