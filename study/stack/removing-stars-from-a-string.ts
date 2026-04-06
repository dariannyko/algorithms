// removing-stars-from-a-string

function removeStars(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    char === "*" ? stack.pop() : stack.push(char);
  }

  return stack.join("");
}

removeStars("leet**cod*e");
