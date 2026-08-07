function validDigit(n: number, x: number): boolean {
  const s = n.toString();
  const firstDigit = s[0];
  const charX = x.toString();
  return firstDigit !== charX && s.includes(charX);
}
