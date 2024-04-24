const vowels = new Set(["a", "e", "i", "o", "u"]);

function vowelStrings(words: string[], left: number, right: number): number {
  let vowelString = 0;
  for (let i = left; i <= right; i++) {
    if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1]))
      vowelString++;
  }

  return vowelString;
}

vowelStrings(["are", "amy", "u"], 0, 2); // 2
