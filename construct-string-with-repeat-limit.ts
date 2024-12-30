function repeatLimitedString(s: string, repeatLimit: number): string {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let res = "";
  const sorted = Array.from(map.keys()).sort((a, b) => b.localeCompare(a));

  while (sorted.length > 0) {
    const char = sorted.shift();
    const charsCount = map.get(char);
    const repeated = Math.min(repeatLimit, charsCount);

    res += char?.repeat(repeated);
    const divider = charsCount - repeated;
    map.set(char, divider);

    if (divider > 0) {
      if (sorted.length > 0) {
        let nextChar = sorted.shift();
        res += nextChar;
        const divider = map.get(nextChar) - 1;
        map.set(nextChar, divider);
        if (divider > 0) sorted.unshift(nextChar);
        sorted.unshift(char);
      } else {
        break;
      }
    }
  }
  return res;
}

repeatLimitedString("aababab", 2);
