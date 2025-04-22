function reverseDegree(s: string): number {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const value = "z".charCodeAt(0) + 1 - s.charCodeAt(i);
    res += value * (i + 1);
  }

  return res;
}

reverseDegree("zaza"); // 160
