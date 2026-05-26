function numberOfSpecialChars(word: string): number {
  const set = new Set(word);

  let res = 0;

  for (const char of set) {
    if (char >= "a" && char <= "z" && set.has(char.toUpperCase())) res++;
  }

  return res;
}

numberOfSpecialChars("aaAbcBC"); // 3
