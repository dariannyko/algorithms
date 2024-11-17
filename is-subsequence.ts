function isSubsequence(s: string, t: string): boolean {
  let substrInd = 0;

  for (let i = 0; i < t.length && substrInd < s.length; i++) {
    if (s[substrInd] === t[i]) {
      substrInd++;
    }
  }

  return substrInd === s.length;
}

isSubsequence("abc", "ahbgdcdgsg"); // true
