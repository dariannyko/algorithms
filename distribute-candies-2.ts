function distributeCandies(candyType: number[]): number {
  const type = new Set();
  const maxCandies = Math.floor(candyType.length / 2);

  for (const candy of candyType) {
    if (type.size === maxCandies) return maxCandies;
    type.add(candy);
  }

  return type.size;
}

// distributeCandies([1, 1, 2, 2, 3, 3]); // 3
distributeCandies([1, 1, 2, 3]); // 2
