function replaceDigits(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i += 2) {
    const char = s[i];
    const step =
      s[i + 1] === undefined
        ? ""
        : String.fromCharCode(char.charCodeAt(0) + Number(s[i + 1]));

    res += char + step;
  }

  return res;
}

replaceDigits("a1c1e1");
replaceDigits("a1b2c3d4e");
