function minimumBoxes(apple: number[], capacity: number[]): number {
  capacity.sort((a, b) => b - a);

  let apples = apple.reduce((prev, sum) => prev + sum, 0);

  for (let i = 0; i < capacity.length; i++) {
    apples -= capacity[i];

    if (apples <= 0) {
      return i + 1;
    }
  }

  return 0;
}

minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]); // 2
minimumBoxes([9, 8, 8, 2, 3, 1, 6], [10, 1, 4, 10, 8, 5]); // 5
