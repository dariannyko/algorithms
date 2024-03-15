function canBeTypedWords(text: string, brokenLetters: string): number {
  const words = text.split(" ");

  const normalWords = words.filter((item) => {
    let isBroken = false;
    for (const letter of brokenLetters) {
      if (item.includes(letter)) {
        isBroken = true;
        return;
      }
    }
    return !isBroken;
  });

  return normalWords.length;
}

canBeTypedWords("hello world", "ad");
canBeTypedWords("leet code", "e");
canBeTypedWords("jwssg", "cyvxmtjohsbpfqaur");
