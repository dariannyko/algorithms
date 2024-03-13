function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  let students = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) students++;
  }

  return students;
}

busyStudent([1, 2, 3], [3, 2, 7], 4);
