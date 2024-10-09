const bracketMap = {
  ")": "(",
  "}": "{",
  "]": "[",
};
function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (!stack.length || stack.pop() !== bracketMap[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}")); // true
