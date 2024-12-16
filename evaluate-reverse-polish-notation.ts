const operations = {
  "+": (a, b) => b + a,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (a / b) | 0,
};

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (!operations[token]) {
      stack.push(+token);
    } else {
      const b = stack.pop();
      const a = stack.pop();

      const res = operations[token](a, b);
      stack.push(res);
    }
  }

  return stack[0];
}

// evalRPN(["2", "1", "+", "3", "*"]); // 9
// evalRPN(["4", "13", "5", "/", "+"]); // 6
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]); // 22
