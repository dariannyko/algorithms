function clearDigits(s: string): string {
  const res: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      res.pop();
    } else {
      res.push(s[i]);
    }
  }

  return res.join("");
}

clearDigits("cb34"); // ''
