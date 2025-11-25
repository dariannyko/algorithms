function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    const y = stones[0];
    const x = stones[1];

    stones.splice(0, 2);

    if (x !== y) {
      stones.push(y - x);
    }
  }

  return stones.length === 0 ? 0 : stones[0];
}
