function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  return (s + s).includes(goal);
}

rotateString("abcde", "cdeab"); // true
rotateString("abcde", "abced"); // false
