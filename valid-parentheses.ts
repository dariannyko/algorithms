// const bracketMap = {
//   ")": "(",
//   "}": "{",
//   "]": "[",
// };
// function isValid(s: string): boolean {
//   const stack: string[] = [];

//   for (let char of s) {
//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//     } else {
//       if (!stack.length || stack.pop() !== bracketMap[char]) return false;
//     }
//   }

//   return stack.length === 0;
// }

// console.log(isValid("()[]{}")); // true

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
