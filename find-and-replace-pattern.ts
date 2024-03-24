function getReference(str: string) {
  const map = new Map();

  let reference = "";

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], i);
    }
    reference += map.get(str[i]);
  }
  return reference;
}

function findAndReplacePattern(words: string[], pattern: string) {
  const res: string[] = [];
  const currentPattern = getReference(pattern);

  for (let word of words) {
    if (getReference(word) === currentPattern) res.push(word);
  }

  return res;
}

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
);
