function commonChars(words: string[]): string[] {
  if (words.length === 0) return [];

  const arr: string[] = [];
  const fw = words[0];

  for (let char of fw) {
    const appearsInAll = words.every((word) => word.includes(char));
    if (appearsInAll) {
      arr.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }
  return arr;
}
