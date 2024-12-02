function isPrefixOfWord(sentence: string, searchWord: string): number {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) return i + 1;
  }
  return -1;
}

console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("i am tired", "you")); // -1
