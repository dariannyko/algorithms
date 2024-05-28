function isPrefixOfWord(sentence: string, searchWord: string): number {
  const res = sentence
    .split(" ")
    .findIndex((word) => word.startsWith(searchWord));

  return res < 0 ? res : res + 1;
}

isPrefixOfWord("i love eating burger", "burg"); // 4
