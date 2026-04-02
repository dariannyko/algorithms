function removeDuplicates(s: string) {
  const stack: string[] = [];
  for (const char of s) {
    stack.at(-1) === char ? stack.pop() : stack.push(char);
  }
  return stack.join("");
}
