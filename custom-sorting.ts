function customSortString(order: string, s: string): string {
  const map = {};

  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }

  const res = s
    .split("")
    .sort((a, b) => {
      if (map[a] === map[b]) return 0;
      if (map[a] === undefined) return -1;
      if (map[b] === undefined) return 1;

      return map[a] - map[b];
    })
    .join("");

  return res;
}

customSortString("cba", "abcd");
customSortString("bcafg", "abcd");
customSortString("exv", "xwvee");
