function minimumBoxes(apple: number[], capacity: number[]): number {
  let sum = apple.reduce((sum, item) => sum + item, 0);
  let minBoxes = 0;

  capacity.sort((a, b) => b - a);

  for (let i = 0; i < capacity.length && sum > 0; i++) {
    sum -= capacity[i];
    minBoxes++;
  }

  return minBoxes;
}

minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]) // 2
