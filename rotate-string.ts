function rotateString(s: string, goal: string): boolean {
  return (s + s).includes(goal);
}

rotateString("abcde", "cdeab"); // true
rotateString("abcde", "abced"); // false
