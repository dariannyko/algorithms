function makeGood(s: string): string {
  const arr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (
      arr.length &&
      char.toLowerCase() === arr.at(-1).toLowerCase() &&
      char !== arr.at(-1)
    ) {
      arr.pop();
    } else {
      arr.push(char);
    }
  }
  return arr.join("");
}

makeGood("leEeetcode");
