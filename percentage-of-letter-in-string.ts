function percentageLetter(s: string, letter: string): number {
  let freq = 0;

  for (const char of s) {
    if (letter === char) freq++;
  }

  return Math.floor((freq * 100) / s.length);
}

percentageLetter("foobar", "o");
