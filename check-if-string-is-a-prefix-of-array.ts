function isPrefixString(s: string, words: string[]): boolean {
  for (let word of words) {
    if (s.length == 0) return true;
    if (s.startsWith(word)) {
      s = s.replace(word, "");
    } else {
      return false;
    }
  }

  return s.length == 0;
}

isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apple"]); // true
