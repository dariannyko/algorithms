function maxDistance(str: string, k: number): number {
  let max = 0;
  let x = 0;
  let y = 0;
  for (let i = 0; i < str.length; i++) {
    const direction = str[i];

    x += direction === "E" ? 1 : direction === "W" ? -1 : 0;
    y += direction === "N" ? 1 : direction === "S" ? -1 : 0;

    max = Math.max(max, Math.min(Math.abs(x) + Math.abs(y) + k * 2, i + 1));
  }

  return max;
}
