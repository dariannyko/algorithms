function freqAlphabets(s: string): string {
  let alhabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
