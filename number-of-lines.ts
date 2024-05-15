function numberOfLines(widths: number[], s: string): number[] {
  let px = 0;
  let lines = 1;

  for (let char of s) {
    const strWidth = widths[char.charCodeAt(0) - 97];
    px += strWidth;

    if (px > 100) {
      px = strWidth;
      lines++;
    }
  }

  return [lines, px];
}

numberOfLines(
  [
    4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ],
  "bbbcccdddaaa"
); // [ 2, 4 ]
