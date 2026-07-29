function checkGoodInteger(n: number): boolean {
  let digitSum = 0;
  let squareSum = 0;
  const s = n.toString();
  for (let i = 0; i < s.length; i++) {
    const digit = Number(s[i]);
    digitSum += digit;
    squareSum += digit * digit;
  }
  return squareSum - digitSum >= 50;
}
