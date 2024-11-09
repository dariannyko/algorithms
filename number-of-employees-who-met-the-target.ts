function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  return hours.reduce((prev, curr) => {
    if (curr >= target) return ++prev;
    return prev;
  }, 0);
}

numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2); // 3
