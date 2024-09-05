function reorderSpaces(text: string): string {
  let spaces = 0;
  let word = "";
  const sentence: string[] = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      spaces++;
      if (word) {
        sentence.push(word);
        word = "";
      }
    } else {
      word += text[i];
    }
  }
  if (word) sentence.push(word);

  const delim = Math.floor(spaces / (sentence.length - 1));

  let res = "";

  sentence.forEach((item, index) => {
    if (index !== sentence.length - 1) {
      res += item.padEnd(item.length + delim);
    } else {
      res += item;
    }
  });

  const diff = text.length - res.length;

  return res + " ".repeat(diff);
}

reorderSpaces(" practice   makes   perfect"); // "practice   makes   perfect "
reorderSpaces("  this   is  a sentence "); // "this   is   a   sentence"
