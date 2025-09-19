function maxContainers(n: number, w: number, maxWeight: number): number {
  return Math.min((maxWeight - (maxWeight % w)) / w, Math.pow(n, 2));
}
