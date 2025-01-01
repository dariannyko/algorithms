function maxScore(s: string): number {
  let ones = s.split("").filter((char) => char === "1").length;
  let zeroes = 0;
  let res = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") zeroes++;
    else ones--;

    res = Math.max(res, zeroes + ones);
  }

  return res;
}

maxScore("00");
