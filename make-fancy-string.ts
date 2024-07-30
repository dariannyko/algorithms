function makeFancyString(s: string): string {
  if (s.length < 3) return s;

  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i - 2] == s[i] && s[i - 1] == s[i]) continue;
    res += s[i];
  }
  console.log(res);

  return res;
}

makeFancyString("leeetcode"); // 'leetcode'
