function checkString(s: string): boolean {
  return !s.includes("ba");
}

checkString("abab"); // false
