function minimizedStringLength(s: string): number {
  let length = s.length;
  const set = new Set<string>();

  for (let char of s) {
    if (set.has(char)) {
      length--;
    } else {
      set.add(char);
    }
  }
  return length;
}

minimizedStringLength("baadccab"); // 4
