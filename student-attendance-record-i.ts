// todo
function checkRecord(s: string): boolean {
  let absentCount: number = 0;
  let lateWindowStart: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === "A") {
      absentCount++;
      if (absentCount >= 2) {
        return false;
      }
    }
    if (s[i] === "L") {
      if (i - lateWindowStart + 1 >= 3) {
        return false;
      }
    } else {
      lateWindowStart = i + 1;
    }
  }
  return true;
}
