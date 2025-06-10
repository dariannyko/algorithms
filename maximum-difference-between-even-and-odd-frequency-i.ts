function maxDifference(s: string): number {
  const freq = new Array(26).fill(0);
  let odd = 0;
  let even = Infinity;

  for (let letter of s) {
    freq[letter.charCodeAt(0) - 97]++;
  }

  for (let f of freq) {
    if (f === 0) continue;

    if (f % 2 == 0) {
      even = Math.min(even, f);
    } else {
      odd = Math.max(odd, f);
    }
  }

  return odd - even;
}

maxDifference("abcabcab"); // 3
