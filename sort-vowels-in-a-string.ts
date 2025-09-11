function sortVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const vs = s
    .split("")
    .filter((c) => vowels.has(c))
    .sort();

  let vi = 0;
  const chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    if (vowels.has(chars[i])) {
      chars[i] = vs[vi++];
    }
  }

  return chars.join("");
}
