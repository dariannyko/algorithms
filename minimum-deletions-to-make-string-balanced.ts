function minimumDeletions(s: string): number {
  let res = 0;
  let count = 0;

  for (let char of s) {
    if (char === "b") {
      count++;
    } else {
      if (count > 0) {
        res++;
        count--;
      }
    }
  }

  return res;
}

minimumDeletions("bbaaaaabb"); // 2
