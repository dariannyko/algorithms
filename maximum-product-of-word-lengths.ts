const noCommon = (word1: string, word2: string) => {
  const set = new Set(word1);

  for (let i = 0; i < word2.length; i++) {
    if (set.has(word2[i])) return false;
  }

  return true;
};

function maxProduct(words: string[]): number {
  words.sort((a, b) => b.length - a.length);
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (noCommon(words[i], words[j])) {
        max = Math.max(words[i].length * words[j].length, max);
        break;
      }
    }
  }

  return max;
}

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
