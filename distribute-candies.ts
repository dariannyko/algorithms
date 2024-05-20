function distributeCandies(n: number, limit: number): number {
  let count = 0;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      const k = n - i - j;
      if (k >= 0 && k <= limit) {
        count++;
      }
    }
  }

  return count;
}

distributeCandies(3, 3);
