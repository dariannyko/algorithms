function lengthOfLastWord(s: string): number {
  return s.trim().split(" ").at(-1)?.length;
}

lengthOfLastWord("Today is a nice day"); // 3
