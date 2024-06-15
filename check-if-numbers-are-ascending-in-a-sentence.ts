function areNumbersAscending(s: string): boolean {
  let current = 0;
  const tokens: string[] = s.split(" ");

  for (let token of tokens) {
    if (!isNaN(+token)) {
      if (current >= +token) {
        return false;
      } else {
        current = +token;
      }
    }
  }

  return true;
}
areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"); // true
