function makeFancyString(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1] && s[i - 2] === s[i]) continue;
    res += s[i];
  }

  return res;
}

makeFancyString("leeetcode");
