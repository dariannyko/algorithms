function rearrangeString(s: string, x: string, y: string): string {
  let result = "";
  let last = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === x) {
      last += s[i];
    } else {
      result += s[i];
    }
  }
  return result + last;
}
