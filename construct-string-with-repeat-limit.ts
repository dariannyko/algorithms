function repeatLimitedString(s: string, repeatLimit: number): string {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let index = s.length - 1;
  let res = "";
  const sorted = s.split("").sort(); // TODO: sort as keys

  while (index) {
    const char = sorted.at(-1);
    const charsCount = map.get(char);
    const repeated = Math.min(repeatLimit, charsCount);

    res += char?.repeat(repeated);
    map.set(char, charsCount - repeated);
    index--;
    //   if()

    // if(charsCount - repeated > 0) {
    //     const nextChar =
    // }
  }
}

repeatLimitedString("aababab", 2);
