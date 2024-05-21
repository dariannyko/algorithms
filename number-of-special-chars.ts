function numberOfSpecialChars(word: string): number {
  const set = new Set(word);
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (
      set.has(word[i].toLocaleLowerCase()) &&
      set.has(word[i].toLocaleUpperCase())
    ) {
      count++;
      set.delete(word[i]);
    }
  }

  return count;
}

numberOfSpecialChars("aaAbcBC"); // 3
