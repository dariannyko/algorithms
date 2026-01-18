function diStringMatch(s: string) {
  const n = s.length,
    res: number[] = new Array(n + 1);
  let L = 0,
    R = n;
  for (const char of s) res[n - R + L] = char === "I" ? L++ : R--;
  return ((res[n] = L), res);
}
