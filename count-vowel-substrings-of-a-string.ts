function countVowelSubstrings(word: string): number {
  word += "x";
  const set = new Set(["a", "i", "u", "e", "o"]);
  const freq = new Map();

  let counter = 0;

  for (let r = 0, l = 0; r < word.length; r++) {
    const s = word[r];
    if (set.has(s)) {
      if (freq.size === 0) {
        l = r;
      }
      freq.set(s, (freq.get(s) || 0) + 1);
    } else {
      if (freq.size === 5) {
        const vow = word.slice(l, r);
        for (let i = 0; i < vow.length - 4; i++) {
          if (freq.size < 5) break;
          const curVowels = new Set(vow[i]);
          let j = i + 1;
          while (curVowels.size < 5) {
            curVowels.add(vow[j]);
            j++;
          }
          counter += vow.length - j + 1;
          const curFreq = freq.get(vow[i]);
          if (curFreq === 1) {
            freq.delete(vow[i]);
          } else {
            freq.set(vow[i], curFreq - 1);
          }
        }
      }
      freq.clear();
    }
  }

  return counter;
}
