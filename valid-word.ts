const vowels = new Set("aeiou");
const consonant = new Set("bcdfghjklmnpqrstvwxyz");
const nums = new Set("1234567890");

function isValid(word: string): boolean {
  if (word.length < 3) return false;

  word = word.toLowerCase();

  let hasVowel = false;
  let hasConsonant = false;

  for (let letter of word) {
    if (!vowels.has(letter) && !consonant.has(letter) && !nums.has(letter))
      return false;

    hasConsonant = hasConsonant || consonant.has(letter);
    hasVowel = hasVowel || vowels.has(letter);
  }

  return hasVowel && hasConsonant;
}

isValid("234Adas");
