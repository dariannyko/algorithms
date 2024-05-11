function findOcurrences(text: string, first: string, second: string): string[] {
  const str = text.split(" ");
  const res: string[] = [];

  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] == first && str[i + 1] == second) {
      res.push(str[i + 2]);
    }
  }

  return res;
}

findOcurrences("alice is a good girl she is a good student", "a", "good"); // ["girl","student"]
