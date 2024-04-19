function scoreOfString(s: string): number {
  let sum = 0;
  for (let i = 1; i < s.length; i++) {
    sum += Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0));
  }
  return sum;
}

scoreOfString("hello"); // 13
