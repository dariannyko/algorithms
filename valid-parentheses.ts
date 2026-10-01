const brackets = {
  "(": ")",
  "{": "}",
  "[": "]",
};
function isValid(s: string): boolean {
  const stack = [];

  for (let bracket of s) {
    if (bracket in brackets) {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;

      const prev = stack.pop();
      if (bracket !== brackets[prev]) return false;
    }
  }

  return stack.length === 0;
}

isValid("()[]{}"); // true
