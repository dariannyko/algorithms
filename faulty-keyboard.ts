function finalString(s: string): string {
  const res: string[] = [];

  for (const char of s) {
    if (char === "i") {
      res.reverse();
    } else {
      res.push(char);
    }
  }

  return res.join("");
}

finalString("poiinter");
