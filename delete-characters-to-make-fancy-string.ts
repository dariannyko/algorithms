function makeFancyString(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i - 2] == s[i] && s[i - 1] == s[i] && s[i - 1] == s[i - 2]) continue;
    res += s[i];
  }

  return res;
}
