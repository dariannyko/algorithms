function mirrorDistance(n: number): number {
  return Math.abs(n - +[...n.toString()].reverse().join(""));
}
