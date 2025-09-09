function concatHex36(n: number): string {
  return ((n ** 2).toString(16) + (n ** 3).toString(36)).toUpperCase();
}
