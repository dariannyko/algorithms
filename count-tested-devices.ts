function countTestedDevices(batteryPercentages: number[]): number {
  let count = 0;
  batteryPercentages.forEach((item) => {
    if (item - count > 0) count++;
  });

  return count;
}

countTestedDevices([0, 1, 2]);
