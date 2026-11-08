function maxRepeating(sequence: string, word: string): number {
  let count = 0;
  let wordGreedy = word;
  while (sequence.includes(wordGreedy)) {
    wordGreedy += word;
    count++;
  }
  return count;
}

maxRepeating("ababc", "ab"); // 2
