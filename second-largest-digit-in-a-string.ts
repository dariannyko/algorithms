function secondHighest(s: string): number {
  const set: Set<number> = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() == s[i].toLocaleLowerCase()) set.add(+s[i]);
  }

  return [...set].sort((a, b) => b - a)[1] ?? -1;
}

secondHighest("abc1111"); // -1
secondHighest("dfa12321afd"); // 2
