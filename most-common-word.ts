function mostCommonWord(paragraph: string, banned: string[]): string {
  const set = new Set();
  const map = new Map();

  const words = paragraph.toLowerCase().match(/\b\w+\b/g);
  let max = 0;
  let mostCommon = "";

  banned.forEach((word) => set.add(word));

  words?.forEach((word) => {
    if (!set.has(word)) {
      const value = (map.get(word) || 0) + 1;
      map.set(word, value);
    }
  });

  for (const [key, val] of map) {
    if (val > max) {
      max = val;
      mostCommon = key;
    }
  }

  return mostCommon;
}

mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
  "hit",
]); // 'ball'
