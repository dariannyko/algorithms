function minInsertions(s: string): number {
  let temp = 0,
    res = 0;
  let need = false;

  for (const ch of s) {
    if (ch === "(") {
      if (need) {
        res++;
        need = false;
      }
      temp++;
    } else {
      if (need) {
        need = false;
      } else {
        if (temp === 0) {
          temp++;
          res++;
        }
        temp--;
        need = true;
      }
    }
  }

  if (need) res++;

  res += temp * 2;
  return res;
}
