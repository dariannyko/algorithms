function largestEven(s: string) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "2") return s.substring(0, i + 1);
  }
  return "";
}
