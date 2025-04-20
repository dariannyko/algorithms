function mostWordsFound(sentences: string[]): number {
  let max = 0;

  for (let sentence of sentences) {
    max = Math.max(max, sentence.split(" ").length);
  }
  return max;
}

mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]); // 6
