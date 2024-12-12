function pickGifts(gifts: number[], k: number): number {
  while (k) {
    let maxInd = 0;
    for (let i = 1; i < gifts.length; i++) {
      if (gifts[i] > gifts[maxInd]) maxInd = i;
    }
    gifts[maxInd] = ~~Math.sqrt(gifts[maxInd]);
    k--;
  }

  return gifts.reduce((sum, curr) => sum + curr, 0);
}

pickGifts([25, 64, 9, 4, 100], 4); // [5,8,9,4,3]
