function repeatedSubstringPattern(s: string): boolean {
  if (s.length == 1) return false;

  let pattern = "";

  for (let i = 0; i < s.length / 2; i++) {
    pattern += s[i];

    if (s.length % (i + 1) === 0 && s.replaceAll(pattern, "") == "") {
      return true;
    }
  }

  return false;
}

repeatedSubstringPattern("abab"); // true
