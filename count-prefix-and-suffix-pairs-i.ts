function isPrefixAndSuffix(str1: string, str2: string) {
  return str2.startsWith(str1) && str2.endsWith(str1);
}

function countPrefixSuffixPairs(words: string[]): number {
  let pairs = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) pairs++;
    }
  }

  return pairs;
}

countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]); // 4
