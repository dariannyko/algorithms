function countGoodRectangles(rectangles: number[][]): number {
  let res = 0;
  let maxLen = 0;

  rectangles.forEach((rect: number[]) => {
    const k = Math.min(rect[0], rect[1]);
    if (maxLen < k) {
      res = 1;
      maxLen = k;
    } else if (maxLen === k) res++;
  });

  return res;
}
