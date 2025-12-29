function removeOuterParentheses(s: string): string {
  const stack = [s[0]];
  let result: string = "";
  let start: number = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }

    if (stack.length === 0) {
      result += s.slice(start + 1, i);
      start = i + 1;
    }
  }

  return result;
}
