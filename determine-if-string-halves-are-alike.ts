function halvesAreAlike(s: string): boolean {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const n = s.length,
    half = n / 2;
  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < half; i++) {
    if (vowels.has(s[i])) count1++;
    if (vowels.has(s[i + half])) count2++;
  }
  return count1 === count2;
}
