function numberOfAlternatingGroups(colors: number[]): number {
  let res = 0;

  colors.push(colors[0]);
  colors.push(colors[1]);

  for (let i = 0; i <= colors.length - 3; i++) {
    const start = colors[i];
    const mid = colors[i + 1];
    const end = colors[i + 2];

    if (start == end && start != mid) res++;
  }

  return res;
}

numberOfAlternatingGroups([1, 1, 1]); // 0
