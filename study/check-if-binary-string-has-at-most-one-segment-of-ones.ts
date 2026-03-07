function checkOnesSegment(s: string): boolean {
  let end = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") end = true;
    else if (s[i] === "1" && end) return false;
  }
  return true;
}

checkOnesSegment("1001"); // false
