function reverseBits(n: number): number {
  var rev = 0;
  for (var i = 0; i < 32; i++) {
    rev = (rev << 1) | ((n >> i) & 1);
  }
  return rev;
}
