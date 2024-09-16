function getMinutes(time: string) {
  const [hours, minutes] = time.split(":");
  return parseInt(hours) * 60 + parseInt(minutes);
}

function findMinDifference(timePoints: string[]): number {
  const minutes = timePoints
    .map((item) => getMinutes(item))
    .sort((a, b) => a - b);

  minutes.push(minutes[0] + 1440); // 24 hours in minutes

  let min = 24 * 60;

  for (let i = 1; i < minutes.length; i++) {
    min = Math.min(min, minutes[i] - minutes[i - 1]);
  }

  return min;
}

findMinDifference(["00:00", "23:59", "00:00"]); // 0
