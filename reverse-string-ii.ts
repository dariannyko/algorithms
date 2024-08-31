function reverseStr(s: string, k: number): string {
  for (let i = 0; i < s.length; i += k * 2) {
    const replacement = s.slice(i, i + k);
    const reversed = replacement.split("").reverse().join("");

    s = s.replace(replacement, reversed);
  }

  return s;
}

reverseStr("abcdefg", 2); // "bacdfeg"
