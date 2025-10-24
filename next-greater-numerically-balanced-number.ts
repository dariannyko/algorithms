function nextBeautifulNumber(n: number): number {
  function isBalanced(i: number) {
    const count: Record<number, number> = {};

    while (i > 0) {
      const n = i % 10;
      i = Math.floor(i / 10);
      count[n] = (count[n] ?? 0) + 1;
    }

    for (let i = 0; i <= 9; i++) {
      if (count[i] > 0 && count[i] !== i) return false;
    }

    return true;
  }

  let i = n + 1;
  while (i <= 1224444) {
    if (isBalanced(i)) return i;
    i++;
  }

  // Impossible
  return -1;
}
