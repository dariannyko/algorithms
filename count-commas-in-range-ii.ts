function countCommas(n: number): number {
  let s = 0;
  for (let i = 3; i <= 15; i += 3) s += Math.max(n - Math.pow(10, i) + 1, 0);
  return s;
}

countCommas(1002); //3
