function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (words[i][0] !== s[i]) return false;
  }

  return true;
}

isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"); // true
