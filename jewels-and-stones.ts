function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set(jewels);

  let res = 0;

  for (let stone of stones) {
    if (set.has(stone)) res++;
  }

  return res;
}

numJewelsInStones("aA", "aAAbbbb"); // 3
