function similarPairs(words: string[]): number {
  const map = new Map();
  words.map((item) => {
    const str = [...new Set(item)].sort().join("");
    const value = (map.get(str) || 0) + 1;
    map.set(str, value);
    return str;
  });

  let pairs = 0;
  map.forEach((item) => {
    if (item > 1) {
      pairs += (item * (item - 1)) / 2;
    }
  });

  return pairs;
}

similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]);
similarPairs(["aabb", "ab", "ba"]);
