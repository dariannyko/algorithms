function prefixCount(words: string[], pref: string): number {
  let count = 0;

  for (let word of words) {
    if (word.startsWith(pref)) count++;
  }

  return count;
}

prefixCount(["pay", "attention", "practice", "attend"], "at"); // 2
