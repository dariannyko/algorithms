function evaluate(s: string, knowledge: string[][]): string {
  const d: Map<string, string> = new Map<string, string>();

  for (const item of knowledge) {
    d.set(item[0], item[1]);
  }

  const ans: string[] = [];
  let start: number = -1;

  for (let i = 0; i < s.length; i++) {
    const c: string = s[i];

    if (c === "(") {
      start = i;
    } else if (c === ")") {
      const key: string = s.slice(start + 1, i);

      ans.push(d.get(key) ?? "?");
      start = -1;
    } else if (start < 0) {
      ans.push(c);
    }
  }

  return ans.join("");
}
