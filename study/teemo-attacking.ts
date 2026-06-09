function findPoisonedDuration(timeSeries: number[], duration: number): number {
  const size = timeSeries.length;
  let out = duration;
  for (let i = 1; i < size; i++) {
    out += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return out;
}
