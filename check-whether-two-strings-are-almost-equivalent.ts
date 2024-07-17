function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const freq = Array(26).fill(0);

  for (let word of word1) {
    freq[word.charCodeAt(0) - 97] += 1;
  }

  for (let word of word2) {
    freq[word.charCodeAt(0) - 97] -= 1;
  }

  return !freq.some((item) => Math.abs(item) > 3);
}

checkAlmostEquivalent("zzzyyy", "iiiiii"); // false
checkAlmostEquivalent("aaaa", "bccb"); // false
checkAlmostEquivalent("abcdeef", "abaaacc"); // true
