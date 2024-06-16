function countCompleteDayPairs(hours: number[]): number {
  let pairs = 0;

  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if (!((hours[i] + hours[j]) % 24)) pairs++;
    }
  }

  return pairs;
}

countCompleteDayPairs([12, 12, 30, 24, 24]); // 2
