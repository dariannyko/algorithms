const lang = ["a", "b", "c"];

function modifyString(s: string): string {
  const arr: string[] = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "?") {
      const letter = lang.find(
        (item) => item !== arr[i + 1] && item !== arr[i - 1]
      );

      arr[i] = letter;
    }
  }

  return arr.join("");
}

modifyString("ubv?w"); // "ubvaw"
modifyString("j?qg??b"); // "jaqgacb"
