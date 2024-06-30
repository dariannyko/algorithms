function removeOccurrences(s: string, part: string): string {
  while (s.includes(part)) {
    s.replace(part, "");
  }

  return s;
}

removeOccurrences("daabcbaabcbc", "abc"); // dab


