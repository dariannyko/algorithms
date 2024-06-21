function divideString(s: string, k: number, fill: string): string[] {
  const res: string[] = [];

  for (let i = 0; i < s.length; i += k) {
    const divider = s.slice(i, i + k);

    if (divider.length < k) {
      const str = divider + fill.repeat(k - divider.length);
      res.push(str);
    } else {
      res.push(s.slice(i, i + k));
    }
  }
  return res;
}

divideString("abcdefghi", 3, "x");
