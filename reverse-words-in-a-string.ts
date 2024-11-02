function reverseWords(s: string): string {
  return s.split(" ").reduce((prev, curr, i) => {
    if (curr === "") return prev;
    if (prev === "") return curr;
    return `${curr} ${prev}`;
  }, "");
}

reverseWords("a good   example "); // "example good a"
