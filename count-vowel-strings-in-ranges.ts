const vowels = new Set(["a", "e", "i", "o", "u"]);

function vowelStrings(words: string[], queries: number[][]): number[] {
  let preSum = 0;
  const queryWords: number[] = [];

  for (let word of words) {
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) preSum++;
    queryWords.push(preSum);
  }

  const res: number[] = [];
  for (let [start, end] of queries) {
    if (start === 0) {
      res.push(queryWords[end]);
    } else {
      res.push(queryWords[end] - queryWords[start - 1]);
    }
  }

  return res;
}

vowelStrings(
  ["aba", "bcb", "ece", "aa", "e"],
  [
    [0, 2],
    [1, 4],
    [1, 1],
  ]
);
