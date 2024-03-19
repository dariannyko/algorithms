function countWords(words1: string[], words2: string[]): number {
  function wordsMap(arr: string[]) {
    const map = new Map();
    for (let word of arr) {
      map.set(word, (map.get(word) || 0) + 1);
    }
    return map;
  }

  let count = 0;

  const map1 = wordsMap(words1);
  const map2 = wordsMap(words2);

  for (let word of map1.keys()) {
    if (map2.get(word) === 1 && map1.get(word) === 1) count++;
  }

  return count;
}

countWords(
  ["leetcode", "is", "amazing", "as", "is"],
  ["amazing", "leetcode", "is"]
);
