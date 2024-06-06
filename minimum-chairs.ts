function minimumChairs(s: string): number {
  let chairs = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "E") {
      chairs++;
    } else {
      chairs--;
    }
    max = Math.max(chairs, max);
  }
  return max;
}

minimumChairs("ELELEEL"); // 2
