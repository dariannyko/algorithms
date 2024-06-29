function detectCapitalUse(word: string): boolean {
  const lowerWord = word.toLowerCase();

  if (word === lowerWord.toUpperCase() || word === lowerWord) return true;

  if (word === lowerWord[0].toUpperCase() + lowerWord.slice(1)) return true;

  return false;
}

detectCapitalUse("FlaG"); // false
