function wordPattern(pattern: string, s: string): boolean {
  const sentence = s.split(" ");

  if (pattern.length !== sentence.length) return false;

  const patternMap = new Map();
  const sentenceMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.has(pattern[i])) patternMap.set(pattern[i], i);
    if (!sentenceMap.has(sentence[i])) sentenceMap.set(sentence[i], i);
  }

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.get(pattern[i]) !== sentenceMap.get(sentence[i]))
      return false;
  }
  return true;
}

wordPattern("abba", "dog cat dog cat"); // true
wordPattern("abba", "dog dog dog dog"); // false
wordPattern("abba", "dog cat cat fish"); // false
