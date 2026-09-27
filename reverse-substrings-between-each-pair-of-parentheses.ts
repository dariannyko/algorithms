function reverseParentheses(s: string): string {
  const pair = new Array<number>(s.length);
  const stack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      const j = stack.pop()!;
      pair[i] = j;
      pair[j] = i;
    }
  }

  let result = "";
  let i = 0;
  let step = 1;

  while (i >= 0 && i < s.length) {
    if (s[i] === "(" || s[i] === ")") {
      i = pair[i];
      step = -step;
    } else {
      result += s[i];
    }
    i += step;
  }

  return result;
}
