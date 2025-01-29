function largestAltitude(gain: number[]): number {
  let tempGain = [0, ...gain];
  for (let i = 2; i < tempGain.length; i++) {
    tempGain[i] += tempGain[i - 1];
  }
  return Math.max(...tempGain);
}
