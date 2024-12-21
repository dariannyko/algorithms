function convertTime(current: string, correct: string): number {
  let diff = getMinutes(correct) - getMinutes(current);
  let count = 0;

  while (diff > 0) {
    if (diff >= 60) diff -= 60;
    else if (diff >= 15) diff -= 15;
    else if (diff >= 5) diff -= 5;
    else if (diff >= 1) diff -= 1;
    count++;
  }

  return count;
}

function getMinutes(value: string): number {
  const time = value.split(":");
  return +time[0] * 60 + +time[1];
}

convertTime("03:45", "04:45"); // 1
