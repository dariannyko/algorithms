function minCostToMoveChips(position: number[]): number {
  let odd = 0;
  let even = 0;

  for (let pos of position) {
    if (pos % 2) {
      even++;
    } else {
      odd++;
    }
  }

  return Math.min(odd, even);
}

minCostToMoveChips([2, 2, 2, 3, 3]);
