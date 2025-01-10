const reversePrefix = (string: string, char: string) => {
  const index = string.indexOf(char);

  return string
    .slice(0, index + 1)
    .split("")
    .reverse()
    .join("")
    .concat(string.slice(index + 1));
};

reversePrefix("abcdefd", "d");
