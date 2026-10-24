function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string,
): number {
  const before = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  for (let m = 1; m < 12; m++) before[m] += before[m - 1]; // days in the year before each month
  const day = (mmdd: string) =>
    before[Number(mmdd.slice(0, 2)) - 1] + Number(mmdd.slice(3)); // "MM-DD" -> day of the year, 1..365
  const first = arriveAlice > arriveBob ? arriveAlice : arriveBob; // the later arrival: "MM-DD" strings sort like dates
  const last = leaveAlice < leaveBob ? leaveAlice : leaveBob; // the earlier departure
  return Math.max(0, day(last) - day(first) + 1);
}
