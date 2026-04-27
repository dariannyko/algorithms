function repeatedCharacter(s: string): string {
  const lettersSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (lettersSet.has(s[i])) {
      return s[i];
    }

    lettersSet.add(s[i]);
  }
}
