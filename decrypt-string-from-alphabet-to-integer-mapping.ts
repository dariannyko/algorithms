function freqAlphabets(s: string): string {
  let res = [];
  for (let i = 0; i < s.length; ) {
    if (s[i] !== "#" && s[i + 2] == "#") {
      res.push(alhabet[parseInt(s[i] + s[i + 1]) - 1]);
      i += 3;
    } else {
      res.push(alhabet[parseInt(s[i]) - 1]);
      i++;
    }
  }
  return res.join("");
}
