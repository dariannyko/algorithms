function balancedStringSplit(s: string): number {
  let res = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? balance-- : balance++;
    if (balance === 0) res++;
  }

  return res;
}

balancedStringSplit("RLRRRLLRLL"); // 2
balancedStringSplit("RLRRLLRLRL"); // 4s
