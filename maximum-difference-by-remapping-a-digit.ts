function remapDigit(x, from, to) {
  if (from === to) return x;
  let answer = x, rem = x, p = 1;
  while (rem > 0) {
    if (rem % 10 === from) {
      answer += (to - from) * p
    }
    p *= 10;
    rem = Math.floor(rem / 10);
  }
  return answer;
}

function minMaxDifference(num) {
  let k = 0, /* First digit. */
      m = 9; /* First digit below nine. */
  let rem = num;
  while (rem > 0) {
    const digit = rem % 10;
    k = digit;
    if (digit !== 9) m = digit;
    rem = Math.floor(rem / 10);
  }
  return remapDigit(num, m, 9) - remapDigit(num, k, 0);
 };