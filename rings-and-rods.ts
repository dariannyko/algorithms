function countPoints(rings: string): number {
  const rods: boolean[][] = Array.from({ length: 10 }, () => [false, false, false]);

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rodIndex = parseInt(rings[i + 1]);

    if (color === 'R') {
      rods[rodIndex][0] = true;
    } else if (color === 'G') {
      rods[rodIndex][1] = true;
    } else if (color === 'B') {
      rods[rodIndex][2] = true;
    }
  }

  let count = 0;
  for (const colors of rods) {
    if (colors[0] && colors[1] && colors[2]) {
      count++;
    }
  }

  return count;
}