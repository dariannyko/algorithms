function gcdOfStrings(str1: string, str2: string): string {
  if (str1 === str2) {
    return str1;
  }

  let str = str1 > str2 ? str2 : str1;

  for (let i = 0; i < str.length; i++) {
    const delim = str.slice(0, str.length - i);

    if (
      str1.replaceAll(delim, "") === "" &&
      str2.replaceAll(delim, "") === ""
    ) {
      return delim;
    }
  }

  return "";
}

console.log(gcdOfStrings("ABABAB", "ABAB"));
