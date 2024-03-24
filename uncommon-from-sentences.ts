function uncommonFromSentences(s1: string, s2: string): string[] {
  const res: string[] = [];
  const map = new Map();

  const str = `${s1} ${s2}`;

  const words = str.split(" ");

  for (let word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  map.forEach((count, word) => {
    if (count == 1) res.push(word);
  });

  return res;
}

uncommonFromSentences("this apple is sweet", "this apple is sour");
