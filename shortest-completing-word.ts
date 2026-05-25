function charsQuantity(word: string) {
  const map = new Map();

  for (const char of word) {
    if (char.toLowerCase() === char.toUpperCase()) continue;

    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}

function isValid(required: any, suggested: any) {
  for (const [char, amount] of required) {
    if (amount > (suggested.get(char) || 0)) return false;
  }

  return true;
}

function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const map = charsQuantity(licensePlate.toLowerCase());
  words.sort((a, b) => a.length - b.length);

  for (const word of words) {
    const map2 = charsQuantity(word);

    if (!isValid(map, map2)) continue;

    return word;
  }

  return "";
}

shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]);
