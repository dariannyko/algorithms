function minRemoveToMakeValid(s: string): string {
  const stack: number[] = [];
  const invalid: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    } else if (s[i] == ")") {
      if (stack.length) {
        stack.pop();
      } else {
        invalid.push(i);
      }
    }
  }

  const set = new Set(stack.concat(invalid));

  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) res += s[i];
  }
  return res;
}

minRemoveToMakeValid("lee(t(c)o)de)");
minRemoveToMakeValid("))((");
minRemoveToMakeValid("a)b(c)d");
