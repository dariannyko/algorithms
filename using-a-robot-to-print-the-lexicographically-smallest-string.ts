function robotWithString(s: string): string {
  const a = "a".charCodeAt(0);
  const freq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - a]++;
  }

  const stack: number[] = [];
  const result: string[] = [];

  function hasSmaller(top: number): boolean {
    for (let i = 0; i < top; i++) {
      if (freq[i] > 0) return true;
    }
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a;
    freq[ch]--;
    stack.push(ch);
    while (stack.length > 0 && !hasSmaller(stack[stack.length - 1])) {
      result.push(String.fromCharCode(stack.pop()! + a));
    }
  }

  return result.join("");
}
