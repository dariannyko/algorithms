function remapDigit(x: number, from: number, to: number): number {
  if (from === to) return x;
  let answer = x,
    rem = x,
    p = 1;
  while (rem > 0) {
    if (rem % 10 === from) {
      answer += (to - from) * p;
    }
    p *= 10;
    rem = Math.floor(rem / 10);
  }
  return answer;
}

function maxDiff(num: number): number {
  let k = 1,
    d = 1,
    m = 9;
  let rem = num;
  while (rem > 0) {
    const digit = rem % 10;
    if (digit > 1) k = digit;
    if (digit !== 9) m = digit;
    d = k === digit ? 1 : 0;
    rem = Math.floor(rem / 10);
  }
  return remapDigit(num, m, 9) - remapDigit(num, k, d);
}
