function checkZeroOnes(s: string): boolean {
  let onesLength = 0;
  let zerosLength = 0;
  let maxOnes = 0;
  let maxZeros = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      onesLength++;
      maxOnes = Math.max(onesLength, maxOnes);
      zerosLength = 0;
    } else {
      zerosLength++;
      maxZeros = Math.max(zerosLength, maxZeros);
      onesLength = 0;
    }
  }
  return maxOnes > maxZeros;
}

checkZeroOnes("1101"); // true
