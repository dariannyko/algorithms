function isBrokenWord(word: string, letters: string) {
  for (let i = 0; i < letters.length; i++) {
    if (word.includes(letters[i])) return true;
  }
  return false;
}

function canBeTypedWords(text: string, brokenLetters: string): number {
  const words = text.split(" ");

  const normalWords = words.filter(
    (item) => !isBrokenWord(item, brokenLetters)
  );

  return normalWords.length;
}

canBeTypedWords("hello world", "ad");
canBeTypedWords("leet code", "e");
canBeTypedWords("jwssg", "cyvxmtjohsbpfqaur");
