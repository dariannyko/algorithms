function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) {
    return image;
  }
  let prevColor = image[sr][sc];
  const neighbours = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  image[sr][sc] = color;

  for (let [rowSpan, colSpan] of neighbours) {
    if (image[sr + rowSpan]?.[sc + colSpan] === prevColor) {
      floodFill(image, sr + rowSpan, sc + colSpan, color);
    }
  }
  return image;
}
