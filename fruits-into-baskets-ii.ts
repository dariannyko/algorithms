function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let res = 0;
  for (const f of fruits) {
    let wasPlaced = false;

    for (let i = 0; i < baskets.length; i++) {
      if (baskets[i] >= f) {
        baskets[i] = 0;
        wasPlaced = true;
        break;
      }
    }

    if (!wasPlaced) res++;
  }

  return res;
}
