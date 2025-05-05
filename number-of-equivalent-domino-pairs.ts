const numEquivDominoPairs = (dominoes: number[][]): number => {
  const counts = new Map<string, number>();
  let res = 0;

  for (const [first, second] of dominoes) {
    const key = first > second ? `${first}${second}` : `${second}${first}`;
    let value = counts.get(key) || 0;
    res += value;

    counts.set(key, value + 1);
  }

  return res;
};
numEquivDominoPairs([
  [1, 2],
  [1, 2],
  [1, 1],
  [1, 2],
  [2, 2],
]); // 3
