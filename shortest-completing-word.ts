const aCode = "a".charCodeAt(0);

function isValid(suggested: string, letters: number[]) {
  const l = new Array(26).fill(0);

  for (const char of suggested) {
    const code = char.charCodeAt(0) - aCode;
    l[code]++;
  }

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > l[i]) return false;
  }

  return true;
}

function shortestCompletingWord(licensePlate: string, words: string[]): string {
  words.sort((a, b) => a.length - b.length);
  const letters = new Array(26).fill(0);

  for (const char of licensePlate.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      const code = char.charCodeAt(0) - aCode;

      letters[code]++;
    }
  }

  for (const word of words) {
    if (isValid(word, letters)) return word;
  }

  return "";
}

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]),
);
